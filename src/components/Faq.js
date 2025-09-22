import Nav from './Nav.js';
import '../styles/faq.css';

export default function Faq({ currentPage, setCurrentPage }) {
  return (
    <div id='faq'>
      <header>
        <h2>{currentPage}</h2>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
      <div id='page-container'>
        <div id='faq-shortcuts'>
          <h3>FAQ Shortcuts</h3>
          <div id='shortcut-list'>
            <a href='#nat-hol'>National Holidays</a>
            <a href='#pow'>Power Outlets</a>
            <a href='#al-hr'>Alcohol Hours</a>
            <a href='#drink'>Drinking Age</a>
            <a href='#eng'>English Speakers</a>
            <a href='#hosp'>Hospitals</a>
            <a href='#crime'>Crime</a>
            <a href='#curr'>Currency</a>
            <a href='#holiday-list'>List of Holidays</a>
          </div>
        </div>
        <div id='faq-content'>
          <ul id='faq-all-list'>
            <li id='nat-hol'>
              <h4>National Holidays</h4>
              Taniti enjoys a large number of national holidays, and many
              tourist attractions and restaurants will be closed on holidays, so
              visitors should plan accordingly. For a full list of national
              holidays, please scroll to the bottom of the page, or click
              <a href='#holiday-list'>here</a>
            </li>
            <li id='pow'>
              <h4>Power Outlets</h4>
              Power outlets are 120 volts (the same as in the United States).
            </li>
            <li id='al-hr'>
              <h4>Alcohol Hours</h4>
              Alcohol is not allowed to be served or sold between the hours of
              midnight and 9:00 a.m.
            </li>
            <li id='drink'>
              <h4>Drinking Age</h4>
              The drinking age on Taniti is 18 and the drinking age is not
              strictly enforced.
            </li>
            <li id='eng'>
              <h4>English Speakers</h4>
              Many younger Tanitians speak fluent English. Very little English
              is spoken in rural areas, especially by the older residents.
            </li>
            <li id='hosp'>
              <h4>Hospitals</h4>
              There is one hospital and several clinics. The hospital has many
              multilingual employees.
            </li>
            <li id='crime'>
              <h4>Crime</h4>
              Violent crime is very rare on Taniti, but as tourism increases,
              there are more reports of pickpocketing and other petty crimes.
            </li>
            <li id='curr'>
              <h4>Currency</h4>
              Taniti uses the U.S. dollar as its currency, but many businesses
              will also accept euros and yen. Several banks facilitate currency
              exchange, and many businesses accept major credit cards.
            </li>
            <li id='holiday-list'>
              <h4>List of Holidays</h4>
              <table id='holiday-table'>
                <tbody>
                  <tr>
                    <td>
                      <strong>January 1</strong>
                    </td>
                    <td>New Year's Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>March 20</strong>
                    </td>
                    <td>March Equinox</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>March 5</strong>
                    </td>
                    <td>Missionary Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>April 3</strong>
                    </td>
                    <td>Good Friday</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>April 6</strong>
                    </td>
                    <td>Easter Monday</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>May 1</strong>
                    </td>
                    <td>Labor Day / May Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>May 8</strong>
                    </td>
                    <td>Victory Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>May 14</strong>
                    </td>
                    <td>Ascension Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>May 25</strong>
                    </td>
                    <td>Whit Monday</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>June 20</strong>
                    </td>
                    <td>June Solstice</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>July 14</strong>
                    </td>
                    <td>French National Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>August 15</strong>
                    </td>
                    <td>Assumption of Mary</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>September 22</strong>
                    </td>
                    <td>September Equinox</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>November 1</strong>
                    </td>
                    <td>All Saints' Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>November 11</strong>
                    </td>
                    <td>Armistice Day</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>November 20</strong>
                    </td>
                    <td>Polynesian New Year</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>December 21</strong>
                    </td>
                    <td>December Solstice</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>December 25</strong>
                    </td>
                    <td>Christmas Day</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
