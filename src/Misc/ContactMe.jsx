import React, {useMemo} from 'react';

import "./ContactMe.css";
import { Input, Button, notification } from 'antd';

const ContactMe = () => {
    const { TextArea } = Input;
    const [api, contextHolder] = notification.useNotification();
    const Context = React.createContext({ name: 'Default' });


    const openNotificationSuccess = (placement) => {
        api.info({
          message: `Notification ${placement}`,
          description: <Context.Consumer>{() => `Message Have been sent, Thank You!`}</Context.Consumer>,
          placement,
        });
      };

      const openNotificationFailure = (placement) => {
        api.info({
          message: `Notification ${placement}`,
          description: <Context.Consumer>{() => `Message not sent, Internal Server Error`}</Context.Consumer>,
          placement,
        });
      };


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "95066fbf-ea01-4772-9fd4-90c82db9a003");
    
        const object = Object.fromEntries(formData.entries()); // Ensure .entries() is used here
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
    
        if (res.success) {
            openNotificationSuccess('bottomRight')
        } else {
            openNotificationFailure('bottomRight')
        }
    };


    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

    return (
        <Context.Provider value={contextValue}>
        {contextHolder}
        <section>
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label className="form-label">Full Name</label>
                    <Input size="large" type="text" placeholder="Enter your name" name="name" required />
                </div>
                <div className="input-box">
                    <label className="form-label">Email Address</label>
                    <Input size="large" type="text" placeholder="Enter your email" name="email" required />
                </div>
                <div className="input-box">
                    <label className="form-label">Message</label>
                    <TextArea size="large" name="message" placeholder="Enter your message" required />
                </div>
                <div className="input-box-btn">
                    <Button type="primary" htmlType="submit">Send Message</Button>
                </div>
            </form>
        </section>
        </Context.Provider>

    );
};

export default ContactMe;
