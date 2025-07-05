import React, { forwardRef } from "react";
import Swal from "sweetalert2";

const Contact = forwardRef((props, ref) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        if (!name || !email || !message) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all the fields before submitting!",
                confirmButtonColor: "#ef4444", // red color
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for reaching out. I'll get back to you soon!",
            confirmButtonColor: "#6366f1",
        });
        e.target.reset(); // Reset the form after submission
    };
    return (
        <div className="bg-[#121e28]">
            <section ref={ref} className="py-16 px-4 md:px-20 container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* Left side */}
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-sm text-primary font-semibold border-l-4 border-primary pl-2">
                            Contacts
                        </p>
                        <h2 className="text-4xl font-bold text-white">
                            Have a project? <br /> Let's talk!
                        </h2>
                    </div>

                    {/* Right side (form) */}
                    <form onSubmit={handleSubmit} className="md:w-1/2 space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full bg-base-100 text-white"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full bg-base-100 text-white"
                        />
                        <textarea
                            name="message"
                            className="textarea textarea-bordered w-full bg-base-100 text-white"
                            rows="4"
                            placeholder="Message"
                        ></textarea>
                        <button type="submit" className="btn bg-primary text-white px-8">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
});

export default Contact;
