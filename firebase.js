// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCz7594CqvuGqWu8wX8sfWaEd7-VWN-uZ4",
  authDomain: "project-93818.firebaseapp.com",
  databaseURL: "https://project-93818.firebaseio.com",
  projectId: "project-93818",
  storageBucket: "",
  messagingSenderId: "245331569122"
};
firebase.initializeApp(config);
  var database = firebase.database();
  var d = new Date();
  var t =d.getTime();
  var count= t;

 $(document).ready(function(){
   $("form#ff").submit(function(e){
       var fname =$('input#name1').val()
       var lname =$('input#name2').val()
       var contact =$('input#name3').val()
       var residence =$('input#name4').val()
       var illness =$('input#name5').val()
       var insurance =$('input#name6').val()
      


       count += 1;
       var data = {
           Fname: fname,
           Lname: lname,
           Cont:contact,
           Res:residence,
           Ill:illness,
           Insu:insurance,
           
       }
       console.log(data)
     
       try {
        firebase.database().ref().child("details/"+count).push(data);
      }
      catch (err){
        console.log(err)
            }
        e.preventDefault()
       
      
    
  
       
   })

     firebase.database().ref("details/").on("child_added", function(saf) {
          saf.forEach(function(datax) {
                    var childData = datax .val();
                    
          $('#datas').append(`<tr><th scope="row">${childData.Fname}</th> 
            <th scope="row">${childData.Lname}</th> 
            <th scope="row">${childData.Cont}</th>
            <th scope="row">${childData.Res}</th>
            <th scope="row">${childData.Ill}</th>
            <th scope="row">${childData.Insu}</th></tr>`)
  })
        })

 })
  