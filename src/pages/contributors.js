import React from 'react';
import PageHeader from '../components/PageHeader';

const Contributors = () => {
    return (
        <div>
            <PageHeader title="Contributors" />
            <p className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <section className="testimonials ">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-item">
                                <img src="./images/testimonials-1.jpg" />
                                <h5>Hoger Shoresh</h5>
                                <p>"This is fantastic. Thank you so much guys!"</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-item">
                                <img src="./images/testimonials-2.jpg" />
                                <h5>Imran Aftab</h5>
                                <p>"Travel California is amazing! I've been using it to find lots of national parks"</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="testimonial-item">
                                <img src="./images/testimonials-3.jpg" />
                                <h5>Naomi Mardon</h5>
                                <p>"Thanks so much for making these resources available to us!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contributors 
