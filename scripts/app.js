$(function() {

  // will return an array of 5 JSON objects
  // blog_post = title, author, created_at, views, body, thumbnail
  // Use jQuery DOM element creation to insert this information into 
  //   the main content div or section of your page

  // Notes: If you wish to format the date, you may convert the created_at date string to a JS Date object as follows:

  // var date = new Date(blogPost.created_at);

  // Then you can use methods such as the following:
  // date.getMonth(); // Returns an integer between 0 (January) and 11 (December)
  // date.getDate(); // Returns an integer between 1 and 31
  // date.getFullYear(); // Returns the year
  // Use jQuery DOM element creation to insert this information into the main content div or section of your page

  function viewBlogPosts(blogResponse) {

    console.log(JSON.stringify(blogResponse));

    for(var i=0; i<blogResponse.length; i++) {
      var json_doc = blogResponse[i];
      console.log(json_doc.author);
      
      // <div class="item_content">
      //   <div class="item_list">
      //     <p class=""></p>
      //   </div><!--.item_list-->
      // </div><!--.item_content-->

      var item_content = $('<div>', {class:'item_content clearfix'});
      var item_list = $('<div>', {class:'item_list'});
      item_content.append(item_list);

      var title_p_element = $('<p></p>');
      title_p_element.html(json_doc.title);
      item_list.append(title_p_element);
      

      var author_p_element = $('<p></p>');
      author_p_element.html(json_doc.author);
      item_list.append(author_p_element);


      var date_p_element = $('<p></p>');
      date_p_element.html(json_doc.created_at);
      item_list.append(date_p_element);


      var views_p_element = $('<p></p>');
      views_p_element.html(json_doc.views);
      item_list.append(views_p_element);


      var body_p_element = $('<p></p>');
      body_p_element.html(json_doc.body);
      item_list.append(body_p_element);


      var thumbnail_p_element = $('<p></p>');
      thumbnail_p_element.html(json_doc.thumbnail);
      item_list.append(thumbnail_p_element);


      $('#items').append(item_content);

    }
  }  // viewBlogs()


  $("#nav_items #blogs").on("click", function(event) {
    event.preventDefault();

    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/blog_posts",
      contentType: "application/json",
      data: {
        // Query string data from the url goes here (the part after the question mark ? in a url)
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },

      success: function(response) {
        // console.log(response); // See what it prints out
        // returns an array of MongoDB Documents (JSON objects)
        // Call the appropriate function here, viewBlogPosts
        viewBlogPosts(response);
      },

      error: function(request, errorType, errorMessage) {
        console.log("ERROR: " + errorMessage);
      }
    });

  });


  
  function viewStudents(studentResponse) {
    console.log(JSON.stringify(studentResponse));

    // use jQuery to clear all of the main content blocks
    $('#items').empty();

    // will return an array of 30 JSON objects
    // students = first_name, last_name, year, and major

    



    // Instead of the main content structure you had before this exercise, 
    //   display the student data using table elements. For example:
    //
    // <table>
    //   <thead>
    //     <tr>
    //       <td id="first_name_heading">First Name</td>
    //       <td id="last_name_heading">Last Name</td>
    //       <td id="year_heading">Year</td>
    //       <td id="major">Major</td>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td id="first_name">Student 1, Property 1 value</td>
    //       <td id="last_name">Student 1, Property 2 value</td>
    //       <td id="year">Student 1, Property 3 value</td>
    //       <td id="major">Student 1, Property 1 value</td>
    //     </tr>
    //   </tbody>
    // </table>


    // <table id="table">
    var table = $('<table>', {id:'table'});

    //   <thead id="table_heading">
    var table_heading = $('<thead>', {id:'table_heading'});
    

    //     <tr id="table_heading_row">
    var table_heading_row = $('<tr>', {id:'table_heading_row'});

    //       <td id="first_name_heading">First Name</td>
    var first_name_heading = $('<td>', {id:'first_name_heading'});
    table_heading_row.append(first_name_heading);
    first_name_heading.html('First Name');

    //       <td id="last_name_heading">Last Name</td>
    var last_name_heading = $('<td>', {id:'last_name_heading'});
    table_heading_row.append(last_name_heading);
    last_name_heading.html('Last Name');

    //       <td id="year_heading">Year</td>
    var year_heading = $('<td>', {id:'year_heading'});
    table_heading_row.append(year_heading);
    year_heading.html('Year');

    //       <td id="major_heading">Major</td>
    var major_heading = $('<td>', {id:'major_heading'});
    table_heading_row.append(major_heading);
    major_heading.html('Major');

    //     </tr>
    table_heading.append(table_heading_row);

    //   </thead>
    table.append(table_heading);

    //   <tbody id="table_body">
    var table_body = $('<tbody>', {id:'table_body'});

    
    for(var i=0; i<studentResponse.length; i++) {
      var json_doc = studentResponse[i];
      // console.log(json_doc.first_name + " " + json_doc.last_name + " " + json_doc.year + " " + json_doc.major);

      //     <tr id="table_body_row">
      var table_body_row = $('<tr>', {id:'table_body_row'});

      //       <td id="first_name">Student 1, Property 1 value</td>
      var table_body_detail_fname = $('<td>');
      var first_name = json_doc.first_name;
      table_body_row.append(table_body_detail_fname);
      table_body_detail_fname.html(first_name);

      //       <td id="last_name">Student 1, Property 2 value</td>
      var table_body_detail_lname = $('<td>');
      var last_name = json_doc.last_name;
      table_body_row.append(table_body_detail_lname);
      table_body_detail_lname.html(last_name);

      //       <td id="year">Student 1, Property 3 value</td>
      var table_body_detail_year = $('<td>');
      var year = json_doc.year;
      table_body_row.append(table_body_detail_year);
      table_body_detail_year.html(year);

      //       <td id="major">Student 1, Property 1 value</td>
      var table_body_detail_major = $('<td>');
      var major = json_doc.major;
      table_body_row.append(table_body_detail_major);
      table_body_detail_major.html(major);

      //     </tr>
    table_body.append(table_body_row);

    }


    //   </tbody>
    table.append(table_body);
    // </table>
    $('#items').append(table);

  }  // viewStudents()


  $("#nav_items #students").on("click", function(event) {
    event.preventDefault();

    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/students",
      contentType: "application/json",
      data: {
        // Query string data from the url goes here (the part after the question mark ? in a url)
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response) {
        // console.log(response); // See what it prints out
        // Call the appropriate function here, viewStudents
        viewStudents(response);
      },
      error: function(request, errorType, errorMessage) {
        console.log("ERROR: " + errorMessage);
      }
    });

  });

 

  // When a user clicks on "Blogs", use jQuery to clear all of the main content blocks. 
  // Then create an asynchronous GET request to the REST server for Blogs using Ajax. 
  // This will return an array of 10 JSON objects representing students. 
  // Display the blogs content in the same manner as you did for task 1. 
  // Brownie points for DRY code.


});