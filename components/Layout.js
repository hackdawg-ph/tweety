import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default function Layout({ title, children }) {
  const { pathname } = useRouter();

  return (
    <div className="h-screen flex">
      <div className="w-84 border-r border-gray-700 bg-gray-dark">
        <div className="w-3/4 ml-auto pr-16">
          <div className="px-5 py-3">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30.782 28.34"
            >
              <g transform="matrix(0.951, -0.309, 0.309, 0.951, -1.778, 6.973)">
                <path d="M220.961,16.113,230.8,21.3V0l-9.841,5.185Zm0,0" transform="translate(-208.241)" />
                <path d="M451.953,169.988h3.457v1.727h-3.457Zm0,0" transform="translate(-425.935 -160.203)" />
                <path d="M434.494,73.172l.661,1.6-3.194,1.323-.661-1.6Zm0,0" transform="translate(-406.471 -68.96)" />
                <path
                  d="M434.483,249.024l-3.194-1.323.661-1.6,3.194,1.323Zm0,0"
                  transform="translate(-406.461 -231.939)"
                />
                <path
                  d="M10.993,99.934H3.457v1.728H3.168a3.168,3.168,0,1,0,0,6.336h.289v1.729H5.391l1.9,6.921h5.6l-1.9-6.638Zm0,0"
                  transform="translate(0 -94.181)"
                />
              </g>
            </svg>
          </div>
          <nav className="mt-2">
            <Link href="/">
              <a
                className={cx('flex my-1 px-5 py-3 rounded-full', {
                  'bg-gray-darker text-blue': pathname === '/',
                  'text-white': pathname !== '/',
                })}
              >
                <svg
                  className={cx('w-6 h-6', {
                    'text-blue': pathname === '/',
                    'text-white': pathname !== '/',
                  })}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.5 21.5"
                >
                  <g transform="translate(-2.25 -1.25)">
                    <path d="M3,9l9-7,9,7V20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2Z" />
                    <path d="M9,22V12h6V22" />
                  </g>
                </svg>
                <span className="ml-4">Home</span>
              </a>
            </Link>
            <Link href="/profile">
              <a
                className={cx('flex my-1 px-5 py-3 rounded-full', {
                  'bg-gray-darker text-blue': pathname === '/profile',
                  'text-white': pathname !== '/profile',
                })}
              >
                <svg
                  className={cx('w-6 h-6', {
                    'text-blue': pathname === '/profile',
                    'text-white': pathname !== '/profile',
                  })}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17.5 19.5"
                >
                  <g transform="translate(-3.25 -2.25)">
                    <path d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" />
                    <circle cx="4" cy="4" r="4" transform="translate(8 3)" />
                  </g>
                </svg>
                <span className="ml-4">Profile</span>
              </a>
            </Link>
            <button className="bg-blue rounded-full w-full mt-2 py-3 text-white">Start Ranting</button>
          </nav>
        </div>
      </div>

      <main className="flex-1 bg-gray-dark">
        <div className="px-6 py-3 border-b border-gray-700">
          <h1 className="text-white text-xl font-bold">{title}</h1>
        </div>

        {children}
      </main>

      <div className="w-84 border-l border-gray-700 bg-gray-dark"></div>
    </div>
  );
}
