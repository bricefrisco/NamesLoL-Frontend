import { useEffect, useState } from "react";

const PleaseDisableAdBlocker = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const testAdBlock = async (retry = 0) => {
      try {
        const res = await fetch(
          `https://s.nitropay.com/1.gif?${Math.random()}&adslot=`
        );
        if (!res.ok) {
          throw new Error("Request failed.");
        } else {
          setShow(false);
        }
      } catch (e) {
        if (retry < 3) {
          console.log("Adblock detected, retrying...");
          testAdBlock(retry + 1);
        } else {
          try {
            const lastNotification = localStorage.getItem(
              "ab.lastNotification"
            );
            if (!lastNotification) {
              setShow(true);
            } else {
              // If the date is more than 1 day ago, show the notification again
              const lastNotificationDate = new Date(parseInt(lastNotification));
              if (Date.now() - lastNotificationDate.getTime() > 86400000) {
                setShow(true);
              }
            }
          } catch (ignored) {}
        }
      }
    };

    testAdBlock();
  }, []);

  const onClose = () => {
    localStorage.setItem("ab.lastNotification", Date.now().toString());
    setShow(false);
  };

  if (!show) {
    return null;
  }

  console.log("Rendering");

  return (
    <div className="z-100 fixed inset-x-0 bottom-0 translate-y-0 scale-100 transform px-2 pb-2 opacity-100 transition duration-500 ease-out sm:px-5 sm:pb-5">
      <div
        className="ml-auto flex max-w-lg rounded-lg bg-black p-4"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5 flex-shrink-0 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium text-gray-300">
          <p className="font-semibold">
            Please consider disabling your ad blocker for this site.
          </p>
          <p className="mt-3">
            If we have helped you find an awesome name, help us keep the lights
            on! We keep ads as unobtrusive as possible. 😊
          </p>
        </div>
        <button
          type="button"
          className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-black p-1.5 text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-gray-400"
          aria-label="Close"
          onClick={onClose}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PleaseDisableAdBlocker;
