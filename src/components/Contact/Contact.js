import React from "react";


const Contact = () => {
    return (

        <div class="container p-3 my-4 border">
            <section class="col-md-4">
                <div class="row">

                    <h1>Contact</h1>
                    <form>
                        <div className="form-group">
                            <label for="usr">Name:</label>
                            <input type="text" className="form-control" id="usr"/>
                        

                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone.
                                    </small>
                                
                                <div>
                                    <h6>Message</h6>
                                    <form action="/action_page.php">
                                        <div className="form-group">
                                            <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary ">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;