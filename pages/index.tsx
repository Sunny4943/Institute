import styles from '../styles/home.module.css'
import intro from '../public/assets/intro-img.svg'
import objective from '../public/assets/about-extra-1.svg'
import mission from '../public/assets/about-extra-2.svg'
import about from '../public/assets/about-img.svg'
import React, { CSSProperties } from 'react'
import { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { GiBookmarklet } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { FaCode, FaRegEnvelope } from "react-icons/fa6";
import { HiNewspaper } from "react-icons/hi2";
import Router from 'next/router'
import { SlLocationPin } from "react-icons/sl";
import GoogleMapReact from 'google-map-react';
import { FiPhoneCall } from 'react-icons/fi'

export interface MyCustomCSS extends CSSProperties {
  '--i': number;
  '--num1': number;
  '--num2': number;
  '--num3': number;
  '--num4': number;
}


export default function Home() {
  const [sideBar, setSideBar] = useState(true);
  const [state, setState] = useState({
    location: {
      address: '1600 Amphitheatre Parkway, Mountain View, california.',
      lat: 37.42216,
      lng: -122.08427,
    }
  })
  function sidebarClick() {
    setSideBar(!(sideBar))
  }
  useEffect(() => {
    let classText: string = `.${styles.dropdown}`;
    let dropdown = document.querySelector<HTMLElement>(classText);
    if (dropdown) {
      dropdown.addEventListener('click', function () {
        console.log(this)
        if (this.classList.contains(`${styles.active}`)) {
          this.classList.toggle(`${styles.active}`);
        }
        else {
          this.classList.add(`${styles.active}`);
        }

      })
    }
    else {
      console.log(dropdown + " false case")
    }
  }, [])

  return (
    <div className={styles.wrapper} >
      <header className={styles.header} id="myHeader">
        <div className={styles.showSpaceBetcol}>
          <div className={styles.logo}>
            <div><a> Ved InfoTech</a></div>
          </div>
          <div className={styles.mobile}>
            <IoMenu />
          </div>
          <div className={styles.desktop}>
            <div className={styles.showSpaceAroundcol}>
              <div style={{ position: "relative" }} className={styles.menu}> <a>Home</a></div>
              <div style={{ position: "relative" }} className={styles.menu}>
                <a>Features</a>
              </div>
              <div className={styles.dropdown} ><div className={styles.menu}><a>Our Course</a></div>
                <span className={styles.left_icon}></span>
                <span className={styles.right_icon}></span>
                <div className={styles.items}>
                  <a href="#" style={{ "--i": 1 } as MyCustomCSS}><span /> CCB(Certificate in Computer Basic)</a>
                  <a href="#" style={{ "--i": 2 } as MyCustomCSS}><span /> CCC(Certificate in Computer Concept)</a>
                  <a href="#" style={{ "--i": 3 } as MyCustomCSS}><span />CCA(Certificate in Computer Accounting)</a>
                  <a href="#" style={{ "--i": 4 } as MyCustomCSS}><span />
                    ACCA(Advance Certificate in Computer Accounting)</a>
                </div>
              </div>
              <div style={{ position: "relative" }} className={styles.menu}><a>About Us</a></div>
              <div style={{ position: "relative" }} className={styles.menu}><a>Contact</a></div>
              <div style={{ position: "relative" }} className={styles.menu}><a>Gallery</a></div>
              <div><button onClick={() => { Router.router?.push("/src/login") }} style={{ backgroundColor: "#6EC1E4", color: "#ffffff", border: 0, borderRadius: "4px", padding: "10px", paddingInline: "20px", fontWeight: "bold", cursor: "pointer" }}>Login</button></div>
            </div>
          </div>

        </div>
      </header >

      <article className={styles.content} >
        <div className={styles.showFlexRow}>
          <div className={styles.responsive_grid}>
            <div className={styles.thumbnail}>
              <h1>We provide Best <u> Computer Knowledge </u> for our Students!</h1>
              <span> Online Courses</span>
            </div>
            <div className={styles.content1}>
              <img src={intro.src} alt="" />
            </div>
          </div>
          <div className={styles.responsive_grid1}>
            <div className={styles.content1} style={{ margin: 0 }}>
              <img src={objective.src} alt="" />
            </div>
            <div className={styles.thumbnail}>
              <h2> Our Objective</h2>
              <ul className={styles.list_text}>
                <li>To Give good Education and best facilities to a student in the minimum fee</li>
                <li>Give Best Knowledge to prepare for Jobs.</li>
                <li>Give support for building his future.</li>
                <li>Provide Job Oriented Computer Courses.</li>
                <li>Place student to Local/Indian/BIG MNC Companies.</li>
                <li>To Make a Literate County & spread Computer</li>
                <li>Education & Awareness all over UP.</li>
                <li>To establish/open low fee computer education center and vocational training institute in rural and urban areas of the Country.</li>
                <li>To organize campus, Seminars, etc. from time to time in the field of computer education.</li>
              </ul>

            </div>
          </div>
          <div className={styles.responsive_grid1}>
            <div className={styles.thumbnail}>
              <h2>Our Mission</h2>
              <ul className={styles.list_text}>
                <li>The primary purpose of Ved InfoTech Computer Institute is to provide a learning environment to our students in which faculty, staff, and students can discover, examine critically, preserve and transmit the knowledge, wisdom, and values that will ensure the survival of future generation and improve the quality of life for all.</li>
                <li>Our Main Mission is that we want to make an educated and technical country. We are running many literacy programs to encourage students to forget technical education in every field. We provide Job support to our student for experience in every technical Field.</li>
                <li>Your Success is OUR MOTO Means If our students are successful in life, then we also in Our Mission. We are only taught we are also making the future bright and better.</li>
              </ul>

            </div>
            <div className={styles.content1} style={{ margin: 0 }}>
              <img src={mission.src} alt="" />
            </div>
          </div>
          <div className={styles.showFlexRow} style={{ justifyContent: "center", alignItems: "center", color: '#000', backgroundColor: "#ecf5ff" }}
          >
            <h2 style={{ fontSize: 40, margin: 0 }}>
              Our Silent Features
            </h2>
            <span style={{ fontSize: 16, }}>We Provide many Features to our Student</span>
            <div className={styles.responsive_grid1}>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div><GiBookmarklet size={60} style={{ color: "#bb00e0", marginTop: "30px" }} /></div>
                  <div className={styles.showFlexRow}>
                    <div><a> Printed Notes  </a>
                    </div>
                    <div>
                      <span>
                        We provide Daily Computer to our Students.We provide Single Computer to Single Student for do Better Practice.
                      </span></div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div><MdComputer size={60} style={{ color: "yellow", marginTop: "25px" }} /></div>
                  <div className={styles.showFlexRow}>
                    <div> <a>Daily Computer Lab</a></div>
                    <div>
                      <span>
                        We provide Daily Computer to our Students.We provide Single Computer to Single Student for do Better Practice.
                      </span></div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div><HiComputerDesktop size={60} style={{ color: "rgb(15, 134, 232)", marginTop: "25px" }} /></div>
                  <div className={styles.showFlexRow}>
                    <div> <a>Visual Classes with Large LCD</a></div>
                    <div>
                      <span>
                        We Provide Visual Classes with Large LCD Screen to the students for better understanding for learning easily.
                      </span></div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div><img src="https://omitec.org/img/exam.svg" width={60} height={60} style={{ marginTop: "25px" }}  ></img></div>
                  <div className={styles.showFlexRow}>
                    <div> <a>Online Examination</a></div>
                    <div>
                      <span>
                        We provide Online Exam and practice Test to Students practice to give online Test.
                      </span></div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div><LiaClipboardCheckSolid size={60} style={{ color: "green", marginTop: "25px" }} /></div>
                  <div className={styles.showFlexRow}>
                    <div> <a>Online Diploma Verification</a></div>
                    <div>
                      <span>
                        We Give online Diploma Verification to verify Diploma.
                      </span></div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div><img src=" https://omitec.org/img/class.svg" width={60} height={60} style={{ marginTop: "25px" }}  ></img></div>
                  <div className={styles.showFlexRow}>
                    <div> <a>Best Teacher</a></div>
                    <div>
                      <span>
                        We Give Best market Use Assignment to the student for work in Jobs Better.
                      </span></div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div> <img src="https://omitec.org/img/support.svg" width={60} height={60} style={{ marginTop: "25px" }}  ></img></div>
                  <div className={styles.showFlexRow}>
                    <div> <a>Lab Support</a></div>
                    <div>
                      <span>
                        We provide Daily Computer to our Students. We provide Single Computer to Single Student for doing Better Practice.
                      </span></div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.showSpaceAroundcol}>
                  <div> <img src="https://omitec.org/img/task.svg" width={60} height={60} style={{ marginTop: "25px" }}  ></img></div>
                  <div className={styles.showFlexRow}>
                    <div> <a>Best Assignment for Practice</a></div>
                    <div>
                      <span>
                        We Give Best market Use Assignment to the student for work in Jobs Better.
                      </span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.showFlexRow} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#0b3f8d" }}
          >
            <h2 style={{ fontSize: 40, margin: 0, color: "#ffffff" }}>
              Our Course
            </h2>
            <p style={{ fontSize: 16, color: "#ffffff", textAlign: "center", paddingInline: "100px" }}>There are some most Popular Course for General Office Work, Normal Designing, Accounts. These course are most demanded in market.</p>
            <span style={{ fontSize: 25, color: "#ffffff" }}> Popular Courses</span>
            <div className={styles.responsive_grid1}>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><img src="https://omitec.org/img/Course/laptopCloud.svg" width={60} height={60} style={{}}  ></img></div>
                  <div><a> CCC  </a></div>
                  <div><p>Certificate in Computer Concept</p></div>
                  <div><p>
                    <b>   Topic :- </b> Computer Fundamental, Libre Office, Digital Financial Tools and Applications
                  </p></div>
                  <div style={{ marginTop: 40, marginBottom: 40 }}><span className={styles.button1}> Read More</span></div>
                </div>

              </div>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><img src="https://omitec.org/img/Course/LaptopBar.svg" width={60} height={60} style={{}}  ></img></div>
                  <div><a> CCB  </a></div>
                  <div><p>Certificate in Computer Basic</p></div>
                  <div><p>
                    <b>   Topic :- </b>Computer Fundamental, Windows, MS Word, MS Excel and MS Power Point
                  </p></div>
                  <div style={{ marginTop: 40, marginBottom: 40 }}><span className={styles.button1}> Read More</span></div>
                </div>

              </div>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><img src="https://omitec.org/img/Course/LaptopUser.svg" width={60} height={60} style={{}}  ></img></div>
                  <div><a> DCSM  </a></div>
                  <div><p>Diploma in Computer Software Management</p></div>
                  <div><p>
                    <b>   Module :- </b> Office Package, DTP, Tally and Web Designing
                  </p></div>
                  <div style={{ marginTop: 40, marginBottom: 40 }}><span className={styles.button1}> Read More</span></div>
                </div>

              </div>
            </div>
            <span style={{ fontSize: 25, color: "#ffffff" }}>  Job Oriented Courses</span>
            <div className={styles.responsive_grid1}>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><img src="https://omitec.org/img/Course/bill.svg" width={60} height={60} style={{}}  ></img></div>
                  <div><a> CCA  </a></div>
                  <div><p>Certificate in Computer Accounting</p></div>
                  <div><p>
                    <b>   Topic :- </b> Manuual Accounting, Computer Accounting, Service Work, Trading Work with GST Billing and Get all related Reports
                  </p></div>
                  <div style={{ marginTop: 40, marginBottom: 40 }}><span className={styles.button1}> Read More</span></div>
                </div>

              </div>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><img src="https://omitec.org/img/Course/finance.svg" width={60} height={60} style={{}}  ></img></div>
                  <div><a> ACCA  </a></div>
                  <div><p>Advance Certificate in Computer Accounting</p></div>
                  <div><p>
                    <b>   Topic :- </b> Manuual Accounting, Computer Accounting, Service, Trading, GST, Advance Accounts and GST Return Filing
                  </p></div>
                  <div style={{ marginTop: 40, marginBottom: 40 }}><span className={styles.button1}> Read More</span></div>
                </div>

              </div>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><img src="https://omitec.org/img/Course/accounting.svg" width={60} height={60} style={{}}  ></img></div>
                  <div><a> MCCA  </a></div>
                  <div><p> Master Certificate in Computer Accounting</p></div>
                  <div><p>
                    <b>   Topic :- </b> Computer Accounting, Service & Trading, Complete GST, Payroll Management, Job Casting Management, Job Order Processing and Income Tax Rules & Concepts
                  </p></div>
                  <div style={{ marginTop: 40, marginBottom: 40 }}><span className={styles.button1}> Read More</span></div>
                </div>

              </div>
            </div>
            <span style={{ fontSize: 25, color: "#ffffff" }}>  Web Development & Programming Courses</span>
            <div className={styles.responsive_grid1}>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><FaCode size={50} style={{ color: "#ffffff" }} /></div>
                  <div><a> Static Web Development  </a></div>
                  <div><p>HTML, DHTML, CSS, Javascript, Bootstrap and Jquery</p></div>
                </div>
              </div>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><FaCode size={50} style={{ color: "#ffffff" }} /></div>
                  <div><a> Dynamic Web Development  </a></div>
                  <div><p>HTML, DHTML, CSS, Javascript, Bootstrap, Jquery, AJAX, PHP and SQL</p></div>
                </div>

              </div>
              <div className={styles.card1}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div><FaCode size={50} style={{ color: "#ffffff" }} /></div>
                  <div><a> Programming Languages  </a></div>
                  <div><p>C, C++, Core JAVA, Advance JAVA, SQL, PHP etc.</p></div>
                </div>

              </div>

              <div className={styles.card2}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div className={styles.students} style={{ "--num1": 5000 } as MyCustomCSS}>+</div>
                  <div><p>Students</p></div>
                </div>

              </div>
              <div className={styles.card2}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div className={styles.students1} style={{ "--num2": 100 } as MyCustomCSS}>+</div>
                  <div><p>Placed Students</p></div>
                </div>

              </div>
              <div className={styles.card2}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div className={styles.students2} style={{ "--num3": 50 } as MyCustomCSS}>+</div>
                  <div><p>CTT Trainers Support</p></div>
                </div>

              </div>
              <div className={styles.card2}>
                <div className={styles.showFlexRow} style={{ alignItems: "center", justifyContent: "center" }}>
                  <div className={styles.students3} style={{ "--num4": 20 } as MyCustomCSS}>+</div>
                  <div><p>Our Staff Support</p></div>
                </div>

              </div>
            </div>
          </div>
          <div className={styles.showFlexRow} style={{ justifyContent: "center", alignItems: "center", color: "#000" }}
          >
            <h2 style={{ fontSize: 40, margin: 0, marginTop: "30px" }}>
              About Us
            </h2>
            <p style={{ fontSize: 20, paddingInline: "100px", textAlign: "center" }}>Ved InfoTech computer Institute is the best Institute in Jaunpur South. It has established in 2009. It aims to give only the best knowledge and facility.</p>
            <div className={styles.responsive_grid1}>
              <div className={styles.thumbnail}>
                <p>We teach all Computer Courses and We also provide Computer Teacher Training Program. We conduct Tally professional courses here. We have all the courses from Tally Basic to Advanced here. We have done various types of government computer training programs.</p>
                <div className={styles.showSpaceAroundcol}>
                  <div ><HiNewspaper size={60} className={styles.icon1} /></div>
                  <div className={styles.showFlexRow} style={{ marginTop: 0, padding: 0, }} >
                    <div><h2>Society Registration</h2></div>
                    <div><a>We are Registered Under Society Registration Act of 1860</a></div>
                  </div>
                </div>
                <div className={styles.showSpaceAroundcol}>
                  <div ><HiNewspaper size={60} className={styles.icon1} /></div>
                  <div className={styles.showFlexRow} style={{ marginTop: 0, padding: 0 }} >
                    <div><h2>ISO Certificate</h2></div>
                    <div><a>We are also certified with ISO 9001:2015.</a></div>
                  </div>
                </div>
                <div className={styles.showSpaceAroundcol}>
                  <div ><HiNewspaper size={60} className={styles.icon1} /></div>
                  <div className={styles.showFlexRow} style={{ marginTop: 0, padding: 0 }} >
                    <div><h2>MSME Registration</h2></div>
                    <div><a>We are Registered in Udyog Aadhar.</a></div>
                  </div>
                </div>
                <div className={styles.showSpaceAroundcol}>
                  <div ><HiNewspaper size={60} className={styles.icon1} /></div>
                  <div className={styles.showFlexRow} style={{ marginTop: 0, padding: 0 }} >
                    <div><h2>NSDC Affliation</h2></div>
                    <div><a>We also have NSDC Affiliation.</a></div>
                  </div>
                </div>
              </div>
              <div className={styles.content1} style={{ margin: 0 }}>
                <img src={about.src} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.showFlexRow} style={{ justifyContent: "center", alignItems: "center", color: "#000" }}
          >
            <h2 style={{ fontSize: 40, margin: 0, marginTop: "30px" }}>
              Contact Us
            </h2>

            <div className={styles.responsive_grid1} style={{ marginTop: "30px" }}>
              <div className={styles.thumbnail}>


                <GoogleMapReact
                  bootstrapURLKeys={{ key: '' }}
                  defaultCenter={state.location}
                  defaultZoom={11}
                >

                </GoogleMapReact>


              </div>
              <div className={styles.thumbnail} style={{ margin: 0 }}>
                <div><label> <SlLocationPin style={{ color: "rgb(9, 178, 160)", fontSize: 30, paddingTop: 7 }} />Kutahan,Jaunpur</label></div>
                <div> <label> <FiPhoneCall style={{ color: "rgb(9, 178, 160)", fontSize: 30, paddingTop: 7 }} /> +91 6386024071</label></div>
                <div><label> <FaRegEnvelope style={{ color: "rgb(9, 178, 160)", fontSize: 30, paddingTop: 7 }} />  Vikasgupta4349@gmail.com</label></div>

              </div>
            </div>
          </div>
        </div>
      </article>
      <footer className={styles.footer}>My footer</footer>
    </div >
  )
}