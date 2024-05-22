const Contact = () => {
  return (
    <div className="container mx-auto my-5 min-h-screen grid bg-slate-100 gap-3 p-7 rounded-3xl">
      <div className="h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58387.008802008015!2d90.24802316757591!3d23.84745525014646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd1f63690a1%3A0x1a46d711304b349!2sSavar!5e0!3m2!1sen!2sbd!4v1711592651650!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="my-5 flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold">Bard</h1>
          <p className="font-medium italic">Address: City Center, Savar</p>
          <p className="font-medium italic">Dhaka, Bangladesh</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Write Us</h1>
          <p className="font-medium italic">
            <button className="btn bg-green-500 px-6 hover:bg-green-600">Email</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
