import React, { useEffect, useState } from "react";

const AllUsers = () => {
  let [users, setUsers] = useState();
  let [profiles, setProfiles] = useState();
  useEffect(() => {
    getusers();
    getProfile();
  }, []);
  let getusers = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setUsers(data);
    }
  };
  let getProfile = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/allprofiles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setProfiles(data);
    }
  };
  return (
    <>
      <div class="bradcam_area bradcam_bg_1">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="bradcam_text">
                <h3>All Profiles in forsa</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="job_details_area">
        <div class="container">
          <div class="row">
            <div class="row my-3">
              <div class="col-md-1">
                <img
                  src="{{user.image.url}}"
                  style={{ width: "80px", borderRadius: "50%" }}
                  alt="none"
                />
              </div>
              <div class="col-md-11 mt-3">
                <a
                  href="/accounts/profile/{{user}}"
                  class="text-decoration-none"
                >
                  <h4 class="text-primary d-inline">
                    {/* {{user.user.get_full_name}} &nbsp;  */}
                  </h4>
                </a>
                {/* <h5 class="text-success d-inline">({{user.categories}})</h5> */}
                {/* <p>{{user.bio}}</p> */}
              </div>
            </div>

            <div class="col-lg-4">
              <div class="job_location_wrap">
                <div class="job_lok_inner">
                  {/* <script>
                            function initMap() {
                                var uluru = {lat: -25.363, lng: 131.044};
                                var grayStyles = [
                                {
                                    featureType: "all",
                                    stylers: [
                                    { saturation: -90 },
                                    { lightness: 50 }
                                    ]
                                },
                                {elementType: 'labels.text.fill', stylers: [{color: '#ccdee9'}]}
                                ];
                                var map = new google.maps.Map(document.getElementById('map'), {
                                center: {lat: -31.197, lng: 150.744},
                                zoom: 9,
                                styles: grayStyles,
                                scrollwheel:  false
                                });
                            }
                            
                            </script>
                            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap"></script>
                             */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
