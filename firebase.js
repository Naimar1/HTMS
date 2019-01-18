// Initialize Firebase
var config = {
    apiKey: "AIzaSyBQ2No5A5yeunX8gint5ozs9N-qiEFmLts",
    authDomain: "projectone-4718c.firebaseapp.com",
    databaseURL: "https://projectone-4718c.firebaseio.com",
    projectId: "projectone-4718c",
    storageBucket: "projectone-4718c.appspot.com",
    messagingSenderId: "711272143427"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var d = new Date();
  var t =d.getTime();
  var count= t;

 $(document).ready(function(){
   $("form").submit(function(e){
       var fname =$('input#name1').val()
       var lname =$('input#name2').val()
       var contact =$('input#name3').val()
       var residence =$('input#name4').val()
       var illness =$('input#name5').val()
       var insurance =$('input#name6').val()
       var transferFrom =$('input#name7').val()
       var transferTo =$('input#name8').val()


       count += 1;
       var data = {
           Fname: fname,
           Lname: lname,
           Cont:contact,
           Res:residence,
           Ill:illness,
           Insu:insurance,
           TransfF:transferFrom,
           TransfT:transferTo
       }
       firebase.database().ref().child("details/"+count).push(data);
    
  
       
   })

     firebase.database().ref("details/").on("child_added", function(saf) {
          saf.forEach(function(datax) {
                    var childData = datax .val();
                    
          $('#datas').append(`<tr><th scope="row">${childData.Fname}</th> 
            <th scope="row">${childData.Lname}</th> 
            <th scope="row">${childData.Cont}</th>
            <th scope="row">${childData.Res}</th>
            <th scope="row">${childData.Ill}</th>
            <th scope="row">${childData.Insu}</th>
            <th scope="row">${childData.TransfF}</th>
            <th scope="row">${childData.TransfT}</th></tr>`)
  })
        })

 })
  