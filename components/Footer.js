/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer class="py-12 bg-blue-900 paddingx">
      <div class="">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <div className="w-[30%]">
              <img className="full" src="/logowhite.png" alt="" />
            </div>
          </div>
          <div class="flex flex-col items-end text-right">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul class="text-gray-400">
                <li class="mb-4">
                  <a
                    href="https://www.linkedin.com/company/market-unwinded/"
                    class="hover:underline "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/marketunwinded"
                    class="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-center">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com" class="hover:underline">
              Market Unwinded™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
