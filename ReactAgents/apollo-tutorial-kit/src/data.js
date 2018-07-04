const events = [{
    eventId: "1",
    name: "REACTATHON",
    org: "NTS",
    startDate: "2018-07-02",
    endDate: "2018-07-04",
    details: "This is Reactathon Event.",
    type: "Current"
  }, {
    eventId: "2",
    name: "HEALATHON",
    org: "CMB",
    startDate: "2018-07-12",
    endDate: "2018-07-14",
    details: "This is Healathon Event.",
    type: "Past"
  }];
  
  //let nextId = 3;
  
  const members = [{
      memberId: "1",
      name: "Karthik",
      email: "karthik.ananthapadmanaban@verizon.com",
      location: "OTP",
      org: "NTS",
      registeredEvents: ["1", "2"]
  }, {
         memberId: "2",
         name: "Anand",
         email: "anandakumar.nagarajan@verizon.com",
         location: "OTP",
         org: "NTS",
         registeredEvents: ["1"]
     }
  ];

  export  { events, members };