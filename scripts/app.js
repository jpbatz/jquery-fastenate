$(function() {
  // Write all your code here
  function viewBlogPosts() {

  }

  function viewStudents() {

  }

  $("#nav_items #blogs").on("click", function() {
    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/blog_posts",
      contentType: "application/json",
      data: {
        // Query string data from the url goes here (the part after the question mark ? in a url)
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response) {
        console.log(response); // See what it prints out
        // Call the appropriate function here, viewBlogPosts or viewStudents
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

  $("#nav_items #students").on("click", function() {
    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/students",
      contentType: "application/json",
      data: {
        // Query string data from the url goes here (the part after the question mark ? in a url)
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response) {
        console.log(response); // See what it prints out
        // Call the appropriate function here, viewBlogPosts or viewStudents
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