import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiOutlinePhone } from "react-icons/ai";

export default function SocialInfo() {
    return (
        <div className="social-info">
            <p><CgMail className="icon-social" /> quangtuan0710@gmail.com</p>
            <p><AiOutlinePhone className="icon-social" /> 0902368341</p>
            <p><FaFacebookSquare className="icon-social" />  www.facebook.com/tuan.weekend.1</p>
        </div>
    );
}