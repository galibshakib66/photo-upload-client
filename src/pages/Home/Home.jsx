import Swal from "sweetalert2";
import axiosPublic from "../../utils/axiosPublic";

const Home = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        axiosPublic
            .post("/users", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    e.target.reset();
                    Swal.fire({
                        icon: "success",
                        title: "User Added!",
                        text: "The User has been added successfully.",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            });
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">What is your name?</span>
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Pick a file</span>
                </div>
                <input
                    type="file"
                    name="image"
                    className="file-input file-input-bordered w-full max-w-xs"
                />
            </label>
            <button className="btn btn-active btn-neutral">Add</button>
        </form>
    );
};

export default Home;
