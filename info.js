const businessInfo = {
  "title": "The Driveway Man",
  
  "businessname": "The Driveway Man",

  "nameofbusinessabout": "The Driveway Man",

  "thebusinessfooter": "The Driveway Man",

  "heading": "Big title on front page",
  
  "heatingdescription": "The description of the heading",
  
  "ourservicesdescription": "Description of the Our Services title",
  
  "service1": "Service 1",
  
  "service1desc": "Description of service 1",
  
  "service2": "Service 2",
  
  "service2desc": "Description of service 2",
  
  "service3": "Service 3",
  
  "service3desc": "Description of service 3",
  
  "abouttitle": "Title for the about us",
  
  "abouttext": "About the business",
  
  "chooseus": "Why people should choose you",
  
  "pro1": "Features 1",
  
  "pro1desc": "Features 1 description",
  
  "pro2": "Features 2",
  
  "pro2desc": "Features 2 description",
  
  "pro3": "Features 3",
  
  "pro3desc": "Features 3 description",
  
  "pro4": "Features 4",
  
  "pro4desc": "Features 4 description",
  
  "hooktitle": "Ready to Protect Your Asphalt?",
  
  "hookdesc": "Contact us today for a free assessment and quote. Our team is ready to help you extend the life of your pavement and enhance your property's appearance.",
  
  "contactusdesc": "Have questions or ready to schedule service? Get in touch with our team today.",
  
  "address": "Address of the business",
  
  "phone": "Business phone number",
  
  "email": "Business email",
  
  "hours": "When you are open. Your hours, and days you are open",
  
  "mission": "Your trusted partner for professional asphalt maintenance and repair services. Quality workmanship, superior materials, exceptional service.",
  
  "servicearea1": "Town you service",
  
  "servicearea2": "Town you service",
  
  "servicearea3": "Town you service",
  
  "servicearea4": "Town you service",
  
  "year": "2025",
  
  "service1name": "Service 1",
  
  "service2name": "Service 1",
  
  "service3name": "Service 1"
};

document.addEventListener('DOMContentLoaded', function() {
  document.title = businessInfo.name;
  
  const nameElements = document.querySelectorAll('#name');
  nameElements.forEach(element => {
    element.textContent = businessInfo.name;
  });
  
  if(document.getElementById("title")) document.getElementById("title").textContent = businessInfo.title;
  if(document.getElementById("businessname")) document.getElementById("businessname").textContent = businessInfo.businessname;
  if(document.getElementById("nameofbusinessabout")) document.getElementById("nameofbusinessabout").textContent = businessInfo.nameofbusinessabout;
  if(document.getElementById("thebusinessfooter")) document.getElementById("thebusinessfooter").textContent = businessInfo.thebusinessfooter;
  if(document.getElementById("heading")) document.getElementById("heading").textContent = businessInfo.heading;
  if(document.getElementById("heatingdescription")) document.getElementById("heatingdescription").textContent = businessInfo.heatingdescription;
  if(document.getElementById("ourservicesdescription")) document.getElementById("ourservicesdescription").textContent = businessInfo.ourservicesdescription;
  if(document.getElementById("service1")) document.getElementById("service1").textContent = businessInfo.service1;
  if(document.getElementById("service1desc")) document.getElementById("service1desc").textContent = businessInfo.service1desc;
  if(document.getElementById("service2")) document.getElementById("service2").textContent = businessInfo.service2;
  if(document.getElementById("service2desc")) document.getElementById("service2desc").textContent = businessInfo.service2desc;
  if(document.getElementById("service3")) document.getElementById("service3").textContent = businessInfo.service3;
  if(document.getElementById("service3desc")) document.getElementById("service3desc").textContent = businessInfo.service3desc;
  if(document.getElementById("abouttitle")) document.getElementById("abouttitle").textContent = businessInfo.abouttitle;
  if(document.getElementById("abouttext")) document.getElementById("abouttext").textContent = businessInfo.abouttext;
  if(document.getElementById("chooseus")) document.getElementById("chooseus").textContent = businessInfo.chooseus;
  if(document.getElementById("pro1")) document.getElementById("pro1").textContent = businessInfo.pro1;
  if(document.getElementById("pro1desc")) document.getElementById("pro1desc").textContent = businessInfo.pro1desc;
  if(document.getElementById("pro2")) document.getElementById("pro2").textContent = businessInfo.pro2;
  if(document.getElementById("pro2desc")) document.getElementById("pro2desc").textContent = businessInfo.pro2desc;
  if(document.getElementById("pro3")) document.getElementById("pro3").textContent = businessInfo.pro3;
  if(document.getElementById("pro3desc")) document.getElementById("pro3desc").textContent = businessInfo.pro3desc;
  if(document.getElementById("pro4")) document.getElementById("pro4").textContent = businessInfo.pro4;
  if(document.getElementById("pro4desc")) document.getElementById("pro4desc").textContent = businessInfo.pro4desc;
  if(document.getElementById("hooktitle")) document.getElementById("hooktitle").textContent = businessInfo.hooktitle;
  if(document.getElementById("hookdesc")) document.getElementById("hookdesc").textContent = businessInfo.hookdesc;
  if(document.getElementById("contactusdesc")) document.getElementById("contactusdesc").textContent = businessInfo.contactusdesc;
  if(document.getElementById("address")) document.getElementById("address").textContent = businessInfo.address;
  if(document.getElementById("phone")) document.getElementById("phone").textContent = businessInfo.phone;
  if(document.getElementById("email")) document.getElementById("email").textContent = businessInfo.email;
  if(document.getElementById("hours")) document.getElementById("hours").textContent = businessInfo.hours;
  if(document.getElementById("mission")) document.getElementById("mission").textContent = businessInfo.mission;
  if(document.getElementById("servicearea1")) document.getElementById("servicearea1").textContent = businessInfo.servicearea1;
  if(document.getElementById("servicearea2")) document.getElementById("servicearea2").textContent = businessInfo.servicearea2;
  if(document.getElementById("servicearea3")) document.getElementById("servicearea3").textContent = businessInfo.servicearea3;
  if(document.getElementById("servicearea4")) document.getElementById("servicearea4").textContent = businessInfo.servicearea4;
  if(document.getElementById("year")) document.getElementById("year").textContent = businessInfo.year;
});
