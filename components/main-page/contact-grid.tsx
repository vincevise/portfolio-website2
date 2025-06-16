import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ContactGrid = (props: Props) => {
  return (
    <div
                className={`col-span-3 lg:col-span-6 row-span-12 bg-white contianer-border-style`}
              >
                <div className=" w-full h-full grid grid-cols-4  gap-2  ">
                  <div className="text-lg lg:text-2xl md:col-span-2  p-4 text-left text-gray-800">
                    Contact
                  </div>
                  <div className="col-span-3 md:col-span-2 p-4 grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-2">
                    <Link
                      href="https://github.com/vincevise"
                      target="_blank"
                      className="bg-gray-100 rounded p-4 col-span-1 block"
                    >
                      <Image
                        alt="GitHub"
                        width={200}
                        height={200}
                        src="/contact-icons/github-icon.svg"
                        className="w-10 h-10 object-contain"
                      />
                    </Link>

                    <Link
                      href="mailto:vincentvuram204@gmail.com"
                      target="_blank"
                      className="bg-red-100 rounded p-4 col-span-1 block"
                    >
                      <Image
                        alt="Gmail"
                        width={200}
                        height={200}
                        src="/contact-icons/gmail-icon.svg"
                        className="w-10 h-10 object-contain"
                      />
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/vuram-vincent-0426a2141/"
                      target="_blank"
                      className="bg-blue-100 rounded p-4 col-span-1 block"
                    >
                      <Image
                        alt="LinkedIn"
                        width={200}
                        height={200}
                        src="/contact-icons/LinkedIn_icon.svg"
                        className="w-10 h-10 object-contain"
                      />
                    </Link>

                    <Link
                      href="https://x.com/vincevise"
                      target="_blank"
                      className="bg-gray-100 rounded p-4 col-span-1 block"
                    >
                      <Image
                        alt="X (Twitter)"
                        width={200}
                        height={200}
                        src="/contact-icons/x-icon.jpg"
                        className="w-10 h-10 object-contain rounded overflow-hidden"
                      />
                    </Link>
                  </div>
                </div>
              </div>
  )
}

export default ContactGrid