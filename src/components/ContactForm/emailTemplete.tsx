import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTempleteProps {
    name: string;
    email: string;
    // phone: string;
    message: string;
}

export const EmailTemplete = ({
    name,
    email,
    // phone,
    message,
}: EmailTempleteProps) => (
    <Html>
        <React.Fragment>
            <Head />
            <Preview>You Recieved an email from Portfolio</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Text style={{ ...h2, marginBottom: "10px" }}>
                        You Recieved an email from Portfolio
                    </Text>
                    <Heading style={h1}>Hi Abhinav!</Heading>

                    <Text style={{ ...h2, marginBottom: "14px" }}>
                        You recieved an email from {name}
                    </Text>

                    <code style={code}>
                        <p>name: {name}</p>
                        <p>email: {email}</p>
                        {/* <p>phone: {phone}</p> */}
                        <p>message: {message}</p>
                    </code>

                    <Text
                        style={{
                            ...text,
                            color: "#ababab",
                            marginTop: "12px",
                            marginBottom: "38px",
                        }}
                    >
                        Please contact as soon as possible.
                    </Text>
                    <Text style={footer}>@abhinav0115</Text>
                </Container>
            </Body>
        </React.Fragment>
    </Html>
);

export default EmailTemplete;

const main = {
    backgroundColor: "#ffffff",
};

const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
};

const h1 = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
};
const h2 = {
    color: "#5a5454",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
};

const text = {
    color: "#333",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
};

const footer = {
    color: "#898989",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "12px",
    lineHeight: "22px",
    marginTop: "12px",
    marginBottom: "24px",
};

const code = {
    display: "inline-block",
    padding: "16px 4.5%",
    width: "90.5%",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "1px solid #eee",
    color: "#333",
};
