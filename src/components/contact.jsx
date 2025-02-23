import { CONTACT } from "../constants"

CONTACT
function contact() {
  return (
    <div className="border-b pb-20">
        <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="my-4 border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default contact