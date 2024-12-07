import Link from "next/link";

export default function Contact() {
  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-zinc-800 mt-20 text-base h-full">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Want to hire me? Let&apos;s discuss.
      </h5>
      <p className="mb-5 text-gray-800 dark:text-gray-200">
        Drop your message and Let&apos;s discuss about your needs.
      </p>
      <div className="flex justify-between">
      <Link
        href="https://wa.me/9625400635?text=I want to work on a project with you"
        className="mt-5 px-4 text-center w-max font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
        type="submit"
      >
        Chat on WhatsApp
        </Link>
        <Link
          href="mailto:anshk17002@gmail.com"
          className="mt-5 px-4 text-center w-max font-bold h-8 bg-indigo-400 dark:bg-indigo-300 text-white py-1 dark:text-gray-900 rounded"
          type="submit"
        >
          Send an Email
        </Link>
      </div>
    </div>
  );
}