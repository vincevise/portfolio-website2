import React from 'react'
import ItemContainer from '../ui-components/item-container'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { IoSchoolOutline } from 'react-icons/io5'

type Props = {}

const CvSection = (props: Props) => {
  return (
    <ItemContainer col={6}>
              <div className="w-full h-full overflow-y-auto">
                <div className="w-full   flex flex-col text-left ">
                  <div className="p-4 border-b flex items-center gap-3">
                    <PiSuitcaseSimple className="w-6 h-6" />
                    <h3 className="text-lg font-medium">Experience</h3>
                  </div>
                  <div className="p-4 space-y-2 text-sm text-gray-800">
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">React Js Intern</h3>
                        <span className="text-gray-500 text-sm">
                          2022 - 2023
                        </span>
                      </div>
                      <p className="italic text-gray-600">Par Infotech</p>
                      <p className="mt-2 leading-relaxed">
                        Enhanced the existing poster maker app’s mobile
                        experience by making it responsive, using jQuery.
                        Furthermore, implemented drag-and-drop functionality for
                        touch screens on mobile devices.
                      </p>
                    </div>

                    {/* Full Stack Developer */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Full Stack Developer
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2023 - 2023
                        </span>
                      </div>
                      <p className="italic text-gray-600">Freelance</p>
                      <p className="mt-2 leading-relaxed">
                        Created a website using React for an architecture firm,
                        and also developed a CMS application to manage the
                        site’s content. This web app enabled the firm to add and
                        update projects as needed.
                      </p>
                    </div>
                    {/* Front End Developer */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Full Stack Developer
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2023 - present
                        </span>
                      </div>
                      <p className="italic text-gray-600">Zigment</p>
                      <p className="mt-2 leading-relaxed">
                        Created a website using React for an architecture firm,
                        and also developed a CMS application to manage the
                        site’s content. This web app enabled the firm to add and
                        update projects as needed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full  flex flex-col text-left ">
                  <div className="p-4 border-y flex items-center gap-3">
                    <IoSchoolOutline className="w-6 h-6" />
                    <h3 className="text-lg font-medium">Education</h3>
                  </div>
                  <div className="p-4 space-y-4 text-sm text-gray-800">
                    {/* High School */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">High School</h3>
                        <span className="text-gray-500 text-sm">
                          2002 - 2014
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        J.H. Ambani Saraswati Vidya Mandir, Surat
                      </p>
                    </div>

                    {/* Higher Secondary School */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Higher Secondary School
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2014 - 2016
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        Shree Swaminarayan H.V. Vidyalaya, Surat
                      </p>
                    </div>

                    {/* Bachelor of Architecture */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Bachelor of Architecture
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2016 - 2021
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        Raman Bhakta School of Architecture, Surat
                      </p>
                    </div>

                    {/* Full-Stack Web Development Course */}
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          Full-Stack Web Development Course
                        </h3>
                        <span className="text-gray-500 text-sm">
                          2021 - 2022
                        </span>
                      </div>
                      <p className="italic text-gray-600">
                        Great Learning / IIT Roorkee, Online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ItemContainer>
  )
}

export default CvSection