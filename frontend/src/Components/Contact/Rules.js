import React from 'react'
import LayoutHead from '../Layouts/LayoutHead'
import LayoutFooter from '../Layouts/LayoutFooter'
import './Rules.css'
const Rules = () => {
  return (
    <div>
      <div><LayoutHead/></div>
      <div className='Librules'>
      <h1>Rules and Regulations</h1>
        <h2>Library Timings: 09 AM to 07 PM </h2>
        <ul>
          <li>1.Complete silence to be Observed in the Library.</li>
          <li>2.Usage of Mobile phone is strictly prohibited inside the Library.</li>
          <li>3.Users must Keep their belongings at the property Counter before enter into the Library. However they are not advised to leave the 
            valuable things like laptop,mobile,purse,calculator etc in the property counter.
          </li>
          <li>4.Users must record their entry and exit to the library either biometric or barcode scanning.</li>
          <li>5.User should leave the books on the table after the reference</li>
          <li>6.Misplacement of books in different shelves is punishable</li>
          <li>7.Marking,tampering,tear or damage the contents of the books and journals etc. is punishable.</li>
          <li>8.If any book is brought out of library without proper entry serious action will be taken.</li>
          <li>9.The Competent authority will take necessary action against the users who violate the library rules and regulations</li>
          <li>10.Notwithstanding anything contained in the above rules, the decision of the authorities of the institution in all matters
            related to the library services and usage shall be final and binding on all users.
          </li>
        </ul>
      </div>
      <div><LayoutFooter/></div>
    </div>
  )
}

export default Rules
