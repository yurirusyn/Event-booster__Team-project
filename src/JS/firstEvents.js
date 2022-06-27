import fetchImages from './input';
import renderMarkupCards from './renderMarkupCards';
import { paginationMarkup } from './pagination';

const refs = {
  gallery: document.querySelector('.gallery'),
  pageCount: document.querySelector('.pagination'),
};
fetchImages('', 'AU', '0').then(response => {
  if (response.page.totalPages > 50) {
    response.page.totalPages = 50;
  }
  // console.log(response.page.number+1);

  refs.pageCount.innerHTML = paginationMarkup(response.page.totalPages, response.page.number + 1, {
    showStart: false,
    showEnd: false,
    baseTag: 'a',
    link: 'https://app.ticketmaster.com/discovery/v2//events.json?apikey=bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4&page=',
    baseClass: 'pageCount',
    query: 'countryCode=US',
  });

  refs.gallery.innerHTML = renderMarkupCards(response._embedded.events);
});
//   const date = new Date();
//   const msDays = Date.parse(date);
//   console.log(msDays);
//   const eventDate = Date.parse(response._embedded.events[0].dates.start.dateTime);
//   console.log(eventDate);

//   function filterByDateEvent(msDays, eventDate) {
//     const eventDates = Date.parse(
//       response._embedded.events.map(event => event.dates.start.dateTime),
//     );
//     console.log(eventDates);

//     // if (eventDates - msDays > 0) {
//     // }
//   }
//   filterByDateEvent(msDays, eventDate);

//   console.log(response._embedded.events[0].dates.start.dateTime);
//   console.log(sortedByDateEvents);
