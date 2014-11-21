$(function() {
  // Write all your code here
  function viewBlogPosts(blogResponse) {
    console.log(blogResponse);
        // array of mongodb documents (json objects)
        for(var i=0; i<blogResponse.length; i++) {
          var jason_doc = blogResponse[i];
          console.log(jason_doc.author);
          
          // <div class="item_content">
          //   <div class="item_list">
          //     <p class=""></p>
          //   </div><!--.item_list-->
          // </div><!--.item_content-->

          var item_content = $('<div>', {class:'item_content clearfix'});
          var item_list = $('<div>', {class:'item_list'});
          item_content.append(item_list);

          var title_p_element = $('<p></p>');
          title_p_element.html(jason_doc.title);
          item_list.append(title_p_element);
          

          var author_p_element = $('<p></p>');
          author_p_element.html(jason_doc.author);
          item_list.append(author_p_element);


          var date_p_element = $('<p></p>');
          date_p_element.html(jason_doc.created_at);
          item_list.append(date_p_element);


          var views_p_element = $('<p></p>');
          views_p_element.html(jason_doc.views);
          item_list.append(views_p_element);


          var body_p_element = $('<p></p>');
          body_p_element.html(jason_doc.body);
          item_list.append(body_p_element);


          var thumbnail_p_element = $('<p></p>');
          thumbnail_p_element.html(jason_doc.thumbnail);
          item_list.append(thumbnail_p_element);


          $('#items').append(item_content);

        }
  }

  function viewStudents(studentResponse) {
    console.log(studentResponse);
  }


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
        // Call the appropriate function here, viewBlogPosts
        // returns an array of MongoDB Documents (JSON objects)
        viewBlogPosts(response);
      },

      error: function(request, errorType, errorMessage) {
        console.log("ERROR: " + errorMessage);
      }
    });

    // will return an array of 5 JSON objects
    // blog_post = title, author, created_at, views, body, thumbnail

    // Notes: If you wish to format the date, you may convert the created_at date string to a JS Date object as follows:

    // var date = new Date(blogPost.created_at);

    // Then you can use methods such as the following:
    // date.getMonth(); // Returns an integer between 0 (January) and 11 (December)
    // date.getDate(); // Returns an integer between 1 and 31
    // date.getFullYear(); // Returns the year
    // Use jQuery DOM element creation to insert this information into the main content div or section of your page



  });



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

    // use jQuery to clear all of the main content blocks
    // will return an array of 30 JSON objects
    // students = first_name, last_name, year, and major
    // Use jQuery DOM element creation to insert this information into the main content div or section of your page

    // Instead of the main content structure you had before this exercise, display the student data using table elements. For example:

    // <table>
    //   <thead>
    //     <tr>
    //       <td>Property 1</td>
    //       <td>Property 2</td>
    //       <td>Property 3</td>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>Student 1, Property 1 value</td>
    //       <td>Student 1, Property 2 value</td>
    //       <td>Student 1, Property 3 value</td>
    //     </tr>
    //     <tr>
    //       <td>Student 2, Property 1 value</td>
    //       <td>Student 2, Property 2 value</td>
    //       <td>Student 2, Property 3 value</td>
    //     </tr>
    //   </tbody>
    // </table>

  });




  // When a user clicks on "Blogs", use jQuery to clear all of the main content blocks. 
  // Then create an asynchronous GET request to the REST server for Blogs using Ajax. 
  // This will return an array of 10 JSON objects representing students. 
  // Display the blogs content in the same manner as you did for task 1. 
  // Brownie points for DRY code.


});