import { useQuery } from "@tanstack/react-query";
import axiosPublic, { baseURL } from "../../utils/axiosPublic";
import Swal from "sweetalert2";

const Users = () => {
    const {
        data: users,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get("/users");
            return res.data;
        },
    });

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/users/${user._id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch(); //remove from UI
                        Swal.fire({
                            title: "Deleted!",
                            text: `The ${user.name} has been deleted.`,
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: `The ${user.name} remains safe`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {users?.map((user) => (
                <div key={user._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={baseURL + user.imagePath}
                            alt="Shoes"
                            className="h-36"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title my-3">{user.name}</h2>
                        <div className="card-actions">
                            <button
                                onClick={() => handleDelete(user)}
                                className="btn btn-primary"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
