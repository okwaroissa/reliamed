import React from 'react'
import homepick from '../images/home_pickup.png'
import schoolpick from '../images/school_pickup.png'
import disabledchild from '../images/disabled_child_handing.png'
import monitoring from '../images/monitoring.png'
import compliance from '../images/inspection_image.png'
import parentaltrust from '../images/parental_trust.png'
const Services = () => {
    return (
        <div className='relimed-page'>
            <h4 className='reliamed-page-heading'>OUR SERVICES</h4>
            <div className='reliamed-services'>
                <div className='row service-area'>
                    <img src={homepick} alt="home pickup" className='service-area-image col-md-6'/>
                    <div className='col-md-6 service-area-info'>
                        <h5 className='service-area-heading'>Door-to-Door School Transportation</h5>
                        <p>
                            Reliamed Transportation Inc. provides safe and seamless door-to-door transport for school-aged children. 
                            Whether it's a morning pickup from home or afternoon drop-off from school, our team ensures that each child is securely handed over to a responsible adult — every single time.
                        </p>
                        <p>
                            This image shows our commitment to personal connection and trust: we don’t just pick up — we personally handover children to guardians and school staff, reinforcing our promise of complete safety and accountability.
                        </p>
                        <p><em>What sets us apart:</em></p>
                        <ul>
                            <li>Personalized home and school pickups/drop-offs.</li>
                            <li>Hand-to-hand child handoff protocols.</li>
                            <li>Friendly, consistent drivers families can rely on.</li>
                        </ul>
                        <p><em>Reliamed goes beyond the ride — we ensure safe transitions from door to door.</em></p>
                    </div>
                </div>
                
                <div className='row service-area'>
                    <img src={schoolpick} alt="home pickup" className='service-area-image col-md-6'/>
                    <div className='col-md-6 service-area-info'>
                        <h5 className='service-area-heading'>Timely & Coordinated School Drop-Offs</h5>
                        <p>
                            Reliamed Transportation Inc. is proud to operate with precise trip scheduling that ensures every student is picked up and dropped off promptly and safely. 
                            Our team uses carefully coordinated routes and timing systems to maintain on-time arrival at schools — every day, without exception.
                        </p>
                        <p>
                            This image captures the heart of our operational promise: organized, punctual school transport with a friendly face to greet every child.
                        </p>
                        <p><em>Key features of our scheduling service:</em></p>
                        <ul>
                            <li>Predictable pickup and drop-off windows.</li>
                            <li>Real-time routing coordination.</li>
                            <li>Consistent driver assignments for familiar routines.</li>
                        </ul>
                        <p><em>We move on time — because every school day should start with confidence.</em></p>
                    </div>
                </div>
                
                <div className='row service-area'>
                    <img src={disabledchild} alt="home pickup" className='service-area-image col-md-6'/>
                    <div className='col-md-6 service-area-info'>
                        <h5 className='service-area-heading'>Inclusive & Special Needs Transportation</h5>
                        <p>
                            Reliamed Transportation Inc. is fully equipped to serve children with physical disabilities and special needs. 
                            Our fleet includes vehicles with accessibility accommodations and our transportation crew is professionally trained to support mobility, behavioral, and sensory needs with compassion and expertise.
                        </p>
                        <p>
                            This image highlights a core value of our service: no child left behind — whether in a wheelchair, requiring extra attention, or needing a gentler approach to transitions.
                        </p>
                        <p><em>Why we’re trusted by families and care providers:</em></p>
                        <ul>
                            <li>Trained staff in disability and special needs support.</li>
                            <li>Assistive devices and accessibility features.</li>
                            <li>Gentle, respectful handoffs from doorstep to school entrance.</li>
                        </ul>
                        <p><em>Every child deserves a safe, supported ride — and we make that happen.</em></p>
                    </div>
                </div>
                
                <div className='row service-area'>
                    <img src={monitoring} alt="home pickup" className='service-area-image col-md-6'/>
                    <div className='col-md-6 service-area-info'>
                        <h5 className='service-area-heading'>Onboard Monitoring for Every Trip</h5>
                        <p>
                            At Reliamed Transportation Inc., every child’s safety is our top priority. 
                            That’s why each vehicle is staffed with a professional driver and a trained monitor — ensuring constant supervision and attentive care from pickup to drop-off.
                        </p>
                        <p>
                            This image reflects our commitment to accompanied transportation, where our monitors build rapport with children, support behavioral needs, and provide reassurance throughout the journey.
                        </p>
                        <p><em>What this means for families and schools:</em></p>
                        <ul>
                            <li>A trained monitor onboard every trip.</li>
                            <li>Child-focused supervision and support.</li>
                            <li>Real-time communication and incident reporting.</li>
                        </ul>
                        <p><em>We don’t just drive — we care, accompany, and protect.</em></p>
                    </div>
                </div>
                
                <div className='row service-area'>
                    <img src={compliance} alt="home pickup" className='service-area-image col-md-6'/>
                    <div className='col-md-6 service-area-info'>
                        <h5 className='service-area-heading'>State-Compliant & Inspection-Ready Transportation</h5>
                        <p>
                            At Reliamed Transportation Inc., we pride ourselves on upholding the highest safety and regulatory standards in the industry. 
                            Our fleet and drivers consistently pass random roadside inspections and adhere strictly to state transportation guidelines.
                        </p>
                        <p>
                            Whether transporting children, individuals with disabilities, or mental health patients, our commitment to full compliance means your loved ones are always in trusted, law-abiding hands.
                        </p>
                        <p><em>Why it matters:</em></p>
                        <ul>
                            <li>Professionally licensed and trained drivers.</li>
                            <li>Vehicles maintained above inspection standards.</li>
                            <li>Transparent operations that meet state and local regulations</li>
                        </ul>
                        <p><em>Reliamed doesn’t just meet expectations — we exceed them.</em></p>
                    </div>
                </div>

                <div className='row service-area'>
                    <img src={parentaltrust} alt="home pickup" className='service-area-image col-md-6'/>
                    <div className='col-md-6 service-area-info'>
                        <h5 className='service-area-heading'>Trusted School Transportation for Children</h5>
                        <p>
                            Reliamed Transportation Inc. is a trusted partner for families who depend on safe, reliable school transportation for their children. 
                            We treat every child with the same care and respect we would our own — building strong relationships with both the children we transport and the parents who trust us.
                        </p>
                        <p>
                            This image captures our core promise: safe hands from home to school and back again. 
                            Parents and guardians rest easy knowing our professional drivers prioritize punctuality, comfort, and emotional care on every ride.
                        </p>
                        <p><em>Why families choose us:</em></p>
                        <ul>
                            <li>Child-friendly and background-checked drivers</li>
                            <li>Warm handoffs with parents and school staff</li>
                            <li>Consistent, dependable scheduling</li>
                        </ul>
                        <p><em>Because safety isn't optional — it's our foundation.</em></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services