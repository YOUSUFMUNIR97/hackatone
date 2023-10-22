import React from 'react'
import logoimg from '../assest/pic/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div id="footer-wrap">
                <footer className="footer">
                    <div className="top-footer">
                        <div className="row">

                            <div className="col-md-3">
                                <h4>Company</h4>
                                <ul className="footer-link">
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            About Us
                                        </a>
                                        </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4>Open Hour</h4>
                                <ul className="footer-link">
                                    <li>
                                        <a className="text-white" href="#" title="Faq">
                                            Faq
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Blog">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4>Resources</h4>
                                <ul className="footer-link">
                                    <li>
                                        <a className="text-white" href="#" title="Faq">
                                            Faq
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Blog">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <div className="footer-logo">
                                    <a className="text-white" href="/" title="Mercury">
                                        <h4>Blood Bank</h4>
                                    </a>
                                    <p className="tagline">
                                        GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="row">
                            <div>
                                <p className="copyright pt-3 text-center">
                                    Copyright &copy; 2020 Smartlight
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer