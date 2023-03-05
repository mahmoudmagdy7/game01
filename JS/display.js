const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '62e88e006amshab876c246db80e1p1d231ajsn3468df23ee80',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

class DisplayGame {

  gettingGame() {
    // getting Game ID
    let gameId = 0;
    $(window).click(function (e) {
      if (e.target.getAttribute('class') == 'layer') {
        gameId = e.target.getAttribute('data-id')
        // show loading 
        $('.overlay').css('display', 'flex')

        // getting data from api 
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
          .then(response => response.json())
          .then(function (response) {
            $('.overlay').fadeOut().css('display', 'flex')

            // injecting ui 
            const data = `
        <!-- game data head starting -->
        <section class="game-header ">

          <nav class="game-logo py-5">
            <a href="" class="col logo-top">
              <svg class='logo' xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="0 0 1906.8 490.7">
                <path
                  d="M174.1 356.6h65.7v40.9c-13.4 9.1-30.7 13.9-53.7 13.9-53.2 0-91.1-38.9-91.1-93.8v-1c0-51.4 37.4-91.8 85.8-91.8 33.6 0 57 11.5 81 31.7l54.6-66.4c-35.5-30.8-77.2-48.6-136.1-48.6C76.8 141.5.1 218.4.1 316.5v1c0 101.9 77.7 174.1 182.2 174.1 61.4 0 110.3-22.6 145.7-52.4v-151H174.1v68.4zM471.8 146L329.4 485h97.3l24-60.6h129.9l24 60.6h99.7L561.4 146h-89.6zm6.2 205.8l37.9-95.2 37.4 95.2H478zm413.2-73.1l-80.1-130.3h-98.3V485h91.1V292.2l85.3 131.3h1.9L977 291.7V485h92.5V148.4h-98.3l-80 130.3zM1107.4 485h93V148.4h-93V485zm355.2-158.7l-138.1-177.9h-86.8V485h92V300.3L1473.6 485h81V148.4h-92v177.9zm290.4-38v68.3h65.7v40.9c-13.4 9.1-30.7 13.9-53.7 13.9-53.2 0-91.1-38.9-91.1-93.8v-1c0-51.4 37.4-91.8 85.8-91.8 33.6 0 57 11.5 81 31.7l54.6-66.4c-35.5-30.8-77.2-48.6-136.1-48.6-103.5 0-180.2 76.9-180.2 175v1c0 101.9 77.7 174.1 182.2 174.1 61.4 0 110.3-22.6 145.7-52.4v-151H1753zM638.8 101.7h27.4V2.6h-27.4v99.1zM750.5 55L709.8 2.6h-25.6v99.1h27.1V47.3l42.4 54.4h23.9V2.6h-27.1V55zm86.7-15c-13.8-3.1-17.2-5.1-17.2-9.6v-.3c0-3.7 3.2-6.4 9.9-6.4 8.8 0 18.6 3.3 27.7 9.8l13.7-19.4C860.6 5.5 847.4.9 830.6.9c-23.7 0-38.3 13.3-38.3 31.7v.3c0 20.2 16.2 26.2 37.3 31 13.6 3.3 16.8 5.4 16.8 9.6v.3c0 4.2-4 6.8-11.4 6.8-11.4 0-22.2-4.1-32-11.9L787.6 87c12.3 10.9 28.8 16.4 46.3 16.4 24 0 40-12 40-32.3v-.3c0-18.5-14.2-25.9-36.7-30.8zM965.5 2.6H879v24.1h29.5v75h27.4v-75h29.6V2.6zm33.4-.7L957 101.7h28.7l7.1-17.8h38.3l7.1 17.8h29.4l-42.1-99.8h-26.6zm1.9 60.6l11.2-28 11 28h-22.2zm142.4-7.5l-40.7-52.4H1077v99.1h27.1V47.3l42.4 54.4h23.9V2.6h-27.1V55zm39.2-52.4v24.1h29.5v75h27.4v-75h29.6V2.6h-86.5z" />
              </svg></a>
          </nav>
        
        </section>
        <!-- game data main starting  -->
        <section class="game-data ">
        
          <div class="container p-4">
            <!-- header section  -->
            <div class=" row gap-5 cards ">
              <div id='gamebg' class="col-lg-6 game-thumbnail">
              </div>
              <div class="col-lg-5 game-status text-center">
                <h3 class="mt-4 ">${response.title}
                </h3>
        
                <h5 class="position-absolute status">${response.status}
                </h5>
                <p class="px-4 mt-4 fs-5 text-start">${response.short_description}</p>
                <a href='${response.game_url}' class="btn fw-bold mt-4"> Lets Get In </a>
              </div>
            </div>
            <!-- down section  -->
            <div class="row down-section mt-5">
              <div class="col-lg-6 text-white">
                <div class="">
                  <h3>About the game</h3>
                  <p class="game-description text-white-50 text-start ">${response.description}</p>
                  <p class="text-decoration-underline text-white-50">Read more</p>
                </div>
              </div>
              <div class="col-lg-6 text-white-50 px-4 about-game">
        
                <div>
                  <table id='game-data-table' class=" ms-5 mt-5 text-white">
        
                    <tr class="table-row">
                      <td class="table-cell text-white-50">genre:</td>
                      <td class="table-cell">${response.genre}</td>
                    </tr>
        
                    <tr class="table-row">
                      <td class="table-cell text-white-50">release_date:</td>
                      <td class="table-cell">${response.release_date}</td>
                    </tr>
        
                    <tr class="table-row">
                      <td class="table-cell text-white-50">publisher:</td>
                      <td class="table-cell">${response.publisher}</td>
                    </tr>
        
                    <tr class="table-row">
                      <td class="table-cell text-white-50">platform:</td>
                      <td class="table-cell">${response.platform}</td>
                    </tr>
        
                    <tr class="table-row">
                      <td class="table-cell text-white-50">developer:</td>
                      <td class="table-cell">${response.developer}</td>
                    </tr>

                    <tr class="table-row">
                      <td class="table-cell text-white-50"> game profile:</td>
                      <td class="table-cell"><a href='${response.freetogame_profile_url}'>${response.freetogame_profile_url}</a></td>
                    </tr>
        
                  </table>
        
                </div>
              </div>
        
            </div>
          </div>
        
        </section>
        `
            // $('.overlay').removeClass('d-none')
            // injecting game data 
            $('.game-content').html(data)
            // showing game data 
            $('.game-content').css('display', 'block').animate({ opacity: 1 }, 1000)
            // hide home page 
            $('.home-content').addClass('d-none')
            if (response.screenshots.length > 1) {
              console.log(response.screenshots[0].image)
              // getting images
              $('.game-thumbnail').css('background-image', `url(${response.screenshots[0].image})`);
              $('.game-header').css('background-image', ` radial-gradient(transparent, rgba(0, 0, 0, 0.863)),url(${response.screenshots[0].image})`);
              $('#back').removeClass('d-none')

            } // if end should make default value
          })

      }
    })
  }

}


export default DisplayGame;


// const data = `
// <!-- game data head starting -->
// <section class="game-header ">
//   <nav class="game-logo py-5">
//     <a href="" class="col logo-top">
//       <svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="0 0 1906.8 490.7">
//         <path
//           d="M174.1 356.6h65.7v40.9c-13.4 9.1-30.7 13.9-53.7 13.9-53.2 0-91.1-38.9-91.1-93.8v-1c0-51.4 37.4-91.8 85.8-91.8 33.6 0 57 11.5 81 31.7l54.6-66.4c-35.5-30.8-77.2-48.6-136.1-48.6C76.8 141.5.1 218.4.1 316.5v1c0 101.9 77.7 174.1 182.2 174.1 61.4 0 110.3-22.6 145.7-52.4v-151H174.1v68.4zM471.8 146L329.4 485h97.3l24-60.6h129.9l24 60.6h99.7L561.4 146h-89.6zm6.2 205.8l37.9-95.2 37.4 95.2H478zm413.2-73.1l-80.1-130.3h-98.3V485h91.1V292.2l85.3 131.3h1.9L977 291.7V485h92.5V148.4h-98.3l-80 130.3zM1107.4 485h93V148.4h-93V485zm355.2-158.7l-138.1-177.9h-86.8V485h92V300.3L1473.6 485h81V148.4h-92v177.9zm290.4-38v68.3h65.7v40.9c-13.4 9.1-30.7 13.9-53.7 13.9-53.2 0-91.1-38.9-91.1-93.8v-1c0-51.4 37.4-91.8 85.8-91.8 33.6 0 57 11.5 81 31.7l54.6-66.4c-35.5-30.8-77.2-48.6-136.1-48.6-103.5 0-180.2 76.9-180.2 175v1c0 101.9 77.7 174.1 182.2 174.1 61.4 0 110.3-22.6 145.7-52.4v-151H1753zM638.8 101.7h27.4V2.6h-27.4v99.1zM750.5 55L709.8 2.6h-25.6v99.1h27.1V47.3l42.4 54.4h23.9V2.6h-27.1V55zm86.7-15c-13.8-3.1-17.2-5.1-17.2-9.6v-.3c0-3.7 3.2-6.4 9.9-6.4 8.8 0 18.6 3.3 27.7 9.8l13.7-19.4C860.6 5.5 847.4.9 830.6.9c-23.7 0-38.3 13.3-38.3 31.7v.3c0 20.2 16.2 26.2 37.3 31 13.6 3.3 16.8 5.4 16.8 9.6v.3c0 4.2-4 6.8-11.4 6.8-11.4 0-22.2-4.1-32-11.9L787.6 87c12.3 10.9 28.8 16.4 46.3 16.4 24 0 40-12 40-32.3v-.3c0-18.5-14.2-25.9-36.7-30.8zM965.5 2.6H879v24.1h29.5v75h27.4v-75h29.6V2.6zm33.4-.7L957 101.7h28.7l7.1-17.8h38.3l7.1 17.8h29.4l-42.1-99.8h-26.6zm1.9 60.6l11.2-28 11 28h-22.2zm142.4-7.5l-40.7-52.4H1077v99.1h27.1V47.3l42.4 54.4h23.9V2.6h-27.1V55zm39.2-52.4v24.1h29.5v75h27.4v-75h29.6V2.6h-86.5z" />
//       </svg></a>
//   </nav>

// </section>
// <!-- game data main starting  -->
// <section class="game-data ">

//   <div class="container p-4">
//     <!-- header section  -->
//     <div class=" row gap-5 cards ">
//       <div class="col-lg-6 game-thumbnail">
//       </div>
//       <div class="col-lg-5 game-status text-center">
//         <h3 class="mt-4 ">Atomic Heart
//         </h3>

//         <h5 class="position-absolute status">live
//         </h5>
//         <p class="px-4 mt-4 fs-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti incidunt nemo
//           assumenda, illum quas.
//         </p>
//         <button class="btn fw-bold mt-4"> Lets Get In </button>
//       </div>
//     </div>
//     <!-- down section  -->
//     <div class="row down-section mt-5">
//       <div class="col-lg-6 text-white">
//         <div class="">
//           <h3>About the game</h3>
//           <p class="game-description text-white-50 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Aliquam
//             exercitationem
//             ullam, laborum numquam quod minima dolorem odio optio corrupti accusantium magni, cupiditate sapiente
//             reiciendis inventore veritatis doloribus molestias molestiae unde error voluptate blanditiis culpa
//             praesentium dolorum ratione. Quam laboriosam pariatur, voluptatum neque, maiores tenetur veritatis quo,
//             natus rerum libero nesciunt?</p>
//           <p class="text-decoration-underline text-white-50">Read more</p>
//         </div>
//       </div>
//       <div class="col-lg-6 text-white-50 px-4 about-game">

//         <div>
//           <table class=" ms-5 mt-5 text-white">

//             <tr class="table-row">
//               <td class="table-cell text-white-50">genre:</td>
//               <td class="table-cell">Shooter</td>
//             </tr>

//             <tr class="table-row">
//               <td class="table-cell text-white-50">release_date:</td>
//               <td class="table-cell">Windows</td>
//             </tr>

//             <tr class="table-row">
//               <td class="table-cell text-white-50">publisher:</td>
//               <td class="table-cell">Windows</td>
//             </tr>

//             <tr class="table-row">
//               <td class="table-cell text-white-50">platform:</td>
//               <td class="table-cell">Windows</td>
//             </tr>

//             <tr class="table-row">
//               <td class="table-cell text-white-50">developer:</td>
//               <td class="table-cell">Windows</td>
//             </tr>

//           </table>

//         </div>
//       </div>

//     </div>
//   </div>

// </section>
// `