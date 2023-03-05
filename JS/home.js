
// api data 
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '62e88e006amshab876c246db80e1p1d231ajsn3468df23ee80',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};


class Data {
  // getting data form api
  gettingResponse(category = 'mmorpg') {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
      .then(function (res) {
        return res.json()
      })
      .then(function (api) {
        let returnedData = '';
        for (const game of api) {
          returnedData +=
            `
            <div class="cardData col-xl-2 col-lg-3 col-md-4">
            <div class="game-card rounded-1 ">
              <div class="hover-effect"></div>
              <div data-id='${game.id}' class='layer'></div>
              <div class="position-relative">
                <img src="${game.thumbnail}" alt="game thumbnail" class=" w-100 rounded-top-1">
                <div class="cats align-items-center position-absolute d-flex justify-content-start px-1">
                  <div class="cat me-2">Free</div>
                  <div class="cat">${game.genre}</div>
                </div>
              </div>
              <div class="content px-3 py-2 pb-3">
                <div class="text">
                  <d class="title fs-5">${game.title}</d>
                  <p class="description">${game.short_description}
                </div>
                <div class=" platform">${game.platform}</div>
              </div>
            </div>
          </div>
                   `
        }

        $('main .row').html(returnedData)


      })

  }
  // change navbar behavior
  changeNav() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('nav ul').css('top', '0')
        $('nav a svg').addClass('logo-scroll')
        $('nav ul').css('right', '-10%')
        if ($(window).outerWidth() < 800) {
          $('nav').css('background-color', '#121a26')
        }
      } else {
        $('nav ul').css('right', '0')
        $('nav ul').css('top', '80px')
        $('nav a svg').removeClass('logo-scroll')
      }
    })
  }


}
export default Data
