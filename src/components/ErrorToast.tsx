interface Props {
  message: string;
}

import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function SuccessToast({ message }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return;

  return (
    <div className="flex justify-center relative">
      <div className="fixed bottom-5 z-50 rounded-lg bg-red-100 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-5 w-5 text-red-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-red-800">{message}</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex bg-red-100 rounded-md p-1.5 text-red-500 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
