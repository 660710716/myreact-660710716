import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/314497961_3487771831458842_1317831686285172681_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tNjcwd4LFpsQ7kNvwGdIExG&_nc_oc=Admkcap6jJaMw2ABXmYJyfGxptv2gf0gfej-cEqHiQ3lBTT0_5am7lbzS_e8uyBcx7c&_nc_zt=23&_nc_ht=scontent.fbkk10-1.fna&_nc_gid=sUJlfjlVI1e-jdIzpVAacA&oh=00_AfV2kcBvQ-OnOkZyRllU1ANL6HhnwLw4L--1Vfiz7otRAg&oe=68BCB59C" 
        alt="User Avatar"
        style={{
            borderRadius: '0%',
            alignItems: 'center',
            width: '300px',
            height: '350px',
            border: '2px solid #050505',
            
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#36BA3D', margin: '10px 0',fontSize: '40px',}}>
        ธีรพงศ์ เลอวงษา
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '20px', textAlign: 'center' }}>
        รหัสนักศึกษา : 660710716 <br/>
        อายุ : 21 ปี <br/>
        นักศึกษาชั้นปีที่ 3
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #CCBFBE',
            padding: '50px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '7000px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;