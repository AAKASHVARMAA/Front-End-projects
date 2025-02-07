import './support.css'; 

export default function Hero() {
    return (
        <section  className="container-fluid" id="support-wrapper">
            <div className="p-5  mb-3"  id="support-portal">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className='row'>
                <div className='col-6' id="support-search">
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder='Eg: How do you i activate F&O, why is my order is getting rejected..'/>
                    <div className='mt-4' id="support-links">
                        <a href=""> Track Account Opening</a>&nbsp; &nbsp; &nbsp;
                        <a href=""> Track Segment Activation</a> &nbsp; &nbsp; &nbsp;
                        <a href=""> Track Intraday Margins</a> <br></br><br></br>
                        <a href=""> Kite user manual</a> 
                    </div>
                </div>
                <div className='col-4' id="support-search"  >
                    <h4>Featured</h4>
                    <ol  id="support-links">
                        <li><a href=""> Surveillance measure on scrips - January 2025</a></li><br></br>
                        <li><a href="">Rights Entitlements listing in January 2025 </a></li>   
                    </ol>
                </div>
               
            </div>
                             
        </section>
    
    );
}
