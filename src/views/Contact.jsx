import { ValidationError, useForm } from "@formspree/react";

export const Contact = () => {
    const [state, handleSubmit] = useForm("mqkjdazj");

    if (state.succeeded) {
        return <p className="text-LiteBlue">Thanks! Message sent successfully</p>;
    }
    
  return (
        <div className="p-2 rounded">
        <form onSubmit={handleSubmit} className="bg-Marfil">
        <div className="mb-4 mx-2">
        <label htmlFor="email" className="text-Marine block font-bold mb-2">
            Email Address
        </label>
        <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 border rounded shadow-sm focus:outline-none focus:border-LiteBlue"
        />
        <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-LiteRed mt-1"
        />
        </div>
        <div className="mb-4 mx-2">
        <label htmlFor="message" className="text-Marine block font-bold mb-2">
            Message
        </label>
        <textarea
            id="message"
            name="message"
            className="w-full p-2 border rounded shadow-sm focus:outline-none focus:border-LiteBlue"
        />
        <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-LiteRed mt-1"
        />
        </div>
        <button
        type="submit"
        disabled={state.submitting}
        className="bg-LiteBlue text-Marfil font-bold py-2 px-4 rounded focus:outline-none hover:bg-Blue"
        >
        {state.submitting ? "Submitting..." : "Submit"}
        </button>
    </form>
        </div>
);
}
