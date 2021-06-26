import React from "react";
import "./knowus.css";

const KnowUs = () => {
  return (
    <div className="col-md-12 pt-4">
      <div className="know-us text-center text-white pb-30">
        <div className="text-container plr pt-4">
          <h1>KNOW US BETTER FOR YOUR FUTURE !</h1>
          <hr />
          <p>
            We, AchieversIT are here to assist you in gaining the best deal of
            knowledge and landing at your dream job. Fresher or experienced, we
            always have a hope to hop into new domains and fields to quicken up
            the pace in our career growth. AchieversIT is dedicated to its
            services to enhance your skills to make a better move towards a
            better future in your career.
          </p>
          <div className="know-us-1">
            <p>
              AchieversIT has been delivering outstanding quality training in IT
              sector courses. 8 years of experience in furnishing qualitative
              training, AchieversIT has gained its own fame in leading an
              individual to land at their dream job.
            </p>
            <p>
              Are you looking out for a job or job switch? Despite the fact that
              your background relates to technical or non-technical, you can
              always find a choice for you with us. AchieversIT is your best
              training partner to help you move forward in your career with
              confidence and ample amount of knowledge. AchieversIT provides
              different trainings to boost up your vocation, namely :
            </p>
            <ol>
              <li>
                <dt>Front-end-Course</dt>
                <dd>
                  User Interface Development ; Web Interface Development ;
                  Angular Training ; ReactJS Development ; VueJS Development ;
                  BootStrap Development ; Material Development.
                </dd>
                <ul>
                  <li>
                    AchieversIT can be listed out as the best UI Development
                    training centre, whereas locates UI Development training in
                    Bangalore ; UI Development training in Marathahalli ; also
                    benefits as UI training online and UI Developer training.
                  </li>
                  <li>
                    AchieversIT stands out as the best Angular Development
                    training centre, whereas locates Angular Development
                    training in Bangalore ; Angular training in Marathahalli;
                    also benefits as Angular training online and Angular online
                    training. Also the courses come with variations like Angular
                    UI Bootstrap ; AngularJS UI Bootstrap ; Angular JavaScript ;
                    JavaScript AngularJS.
                  </li>
                  <li>
                    AchieversIT is stated as the best ReactJS training centre,
                    whereas locates ReactJS training in Bangalore ; ReactJS
                    development training in Bangalore; React training in BTM;
                    ReactJS training in Marathahalli; also benefits as ReactJS
                    training online and ReactJS online training ; React training
                    ; React native training.
                  </li>
                </ul>
              </li>
              <li>
                <dt>Back-end Courses:</dt>
                <dd>Microsoft.NET ; PHP ; Python ; Ruby ; Java</dd>
              </li>
              <li>
                <dt>Mobile Development Courses :</dt>
                <dd>
                  Android App Development ; IOS App App Development ; Windows
                  App Development ; Hybrid App Development.
                </dd>
              </li>
              <li>
                <dt>Full Stack Development Courses :</dt>
                <dd>
                  Java Full Stack Training ; Net Full Stack Training ; Node.JS
                  Full Stack Training ; PHP Full Stack Training ; MEAN Full
                  Stack Training ; MERN Full Stack Training.
                </dd>
              </li>
              <li>
                <dt>Digital Marketing Courses :</dt>
                <dd>
                  Digital Marketing ; Affiliate Marketing ; Email Marketing ;
                  Google Analytics ; Lead Generation ; Remarketing ; Search
                  Engine Optimization ; SMS Marketing ; Social Media Marketing ;
                  WordPress.
                </dd>
              </li>
              <li>
                <dt>Database Programming Courses :</dt>
                <dd>
                  MySQL Training ; Oracle Training ; Mongo DB Training ; NoSQL
                  Training ; PostgreSQL Training.
                </dd>
              </li>
              <li>
                <dt>Project Management Courses :</dt>
                <dd>Prince2 Training ; PMP Training ; Six Sigma Training.</dd>
              </li>
            </ol>
            <p>
              Apart from imparting skills and knowledge, AchieversIT comes up
              with flexible modes of training :
            </p>
            <ol>
              <li>Classroom Training in Bangalore</li>
              <li>Live Virtual Training with Instructor-Led Sessions</li>
              <li>Self-Study (e-Learning)</li>
            </ol>
            <p>
              You can choose your mode of training according to your comfort and
              achieve your courses with certifications.
            </p>
            <b>Perks and advantages of learning with AchieversIT :</b>
            <ol>
              <li>90 hours of training</li>
              <li>Reasonable course fees</li>
              <li>
                200 hours of lab practical sessions under experts’ mentorship
              </li>
              <li>
                Hands-on experience with case studies with real-time examples
              </li>
              <li>24*7 access and support by the team</li>
              <li>Industry experts &amp; Certified trainers</li>
              <li>100% placement support</li>
              <li>
                Industry-aligned curriculum with current market trends and needs
              </li>
              <li>Extra hours of inputs for non-technical individuals</li>
              <li>Flexible mode of learning</li>
            </ol>
            <p>
              You get to attend JOB-Oriented training with real-time knowledge
              and live projects which comes at an affordable price with
              effective Instructor-led sessions.
            </p>
            <p>
              We, at AchieversIT strive to deliver our best efforts; and
              concentrate and help you in achieving your dream job you always
              wished for. We are dedicated to deliver excellence and impart
              knowledge to the individuals aspiring a career in not only IT
              sectors but also in various other fields like Digital Marketing,
              Project Management etc. Our curriculum for all the courses is
              reviewed systematically to keep our candidates at the cutting
              edges of technologies.
            </p>
          </div>
          <div className="col-md-12 pb-30 ">
            <div className="container bx-shadow form-bg pb-30">
              <h3 className="text-white">Impressed by Us? Enroll Now</h3>
              <h6 className="text-white">
                Structure your learning and get a certificate to prove it.
              </h6>
              <form method="post">
                <div className="form row pt-4">
                  <div className="form-group col-md-4 know-us-font font-bold">
                    <label htmlFor="mail">EMAIL</label>
                    <input id="mail" type="email" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="Phone">CONTACT NUMBER</label>
                    <input type="tel" className="form-control" id="Phone" />
                  </div>
                  <div className="form-group col-md-2">
                    <div className="pt">
                      <button
                        type="submit"
                        className="
                      btn
                      contact-btn
                      bg-white
                      btn-lg
                      text-blue
                      rounded-0
                    "
                      >
                        REACH US
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
