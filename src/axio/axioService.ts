import axios from "axios";
import cheerio from "cheerio";



export class ScrapingService {
  AxiosInstance = axios.create(); 
  public async scraping(url:string, res) {
    try {
      this.AxiosInstance.get(url)
      .then( // Once we have data returned ...
        response => {
          const html = response.data; // Get the HTML from the HTTP request
          const $ = cheerio.load(html); // Load the HTML string into cheerio
          const statsTable = $('.statsTableContainer > tr'); // Parse the HTML and extract just whatever code contains .statsTableContainer and has tr inside
          const topScorers = [];

          statsTable.each((i, elem) => {
            const rank: number = parseInt($(elem).find('.rank > strong').text()); // Parse the rank
            const name: string = $(elem).find('.playerName > strong').text(); // Parse the name
            const nationality: string = $(elem).find('.playerCountry').text(); // Parse the country
            const goals: number = parseInt($(elem).find('.mainStat').text()); // Parse the number of goals
            const club:string = $(elem).find('.statNameSecondary').text(); // Parse the club
            topScorers.push({
              rank,
              name,
              club,
              nationality,
              goals
            })
          })
          console.log(topScorers)
          // console.log(topScorers);
          //console.log(statsTable);
          //console.log(html);
          
        }
      )
      .catch(console.error);
    } catch (error) {
       console.log(error);
    }
  }
}
