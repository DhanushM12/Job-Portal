import React from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import { Col, InputGroup, Button } from "react-bootstrap";
import * as yup from "yup";
import "./Login.css";
const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  search: yup.string().required(),
  number: yup.number().required(),
  company: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.string().required(),
});

function RForm() {
  return (
    <div className="jobseeker">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "Mark",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik101">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback tooltip>
                  Looks good!, Recommended a “job posting” for better reach,
                  click to “post a job”
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik102">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="Email"
                    onChange={handleChange}
                  />
                </InputGroup>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik101">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="number"
                  onChange={handleChange}
                  isValid={touched.number && !errors.number}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik102">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  onChange={handleChange}
                  isValid={touched.company && !errors.company}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik103">
                <Form.Label>Preferred functions</Form.Label>
                <Form.Control
                  type="text"
                  name="search"
                  onChange={handleChange}
                  isValid={touched.search && !errors.search}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik103">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik104">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik105">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <div key={`custom-inline-radio`} className="mb-3">
                Areas of Hire
                <Form.Check
                  custom
                  inline
                  label="Fresher"
                  type="radio"
                  id={`custom-inline-radio-1`}
                />
                <Form.Check
                  custom
                  inline
                  label="Junior to Mid"
                  type="radio"
                  id={`custom-inline-radio-2`}
                />
                <Form.Check
                  custom
                  inline
                  label="Mid to Senior"
                  type="radio"
                  id={`custom-inline-radio-3`}
                />
                <Form.Check
                  custom
                  inline
                  label="CXO"
                  type="radio"
                  id={`custom-inline-radio-4`}
                />
              </div>
            </Form.Row>
            <Form.Row>
              <div key={`custom-inline-radio`} className="mb-3">
                Blue collar workforce
                <Form.Check
                  custom
                  inline
                  label="Yes"
                  type="radio"
                  id={`custom-inline-radio-5`}
                />
                <Form.Check
                  custom
                  inline
                  label="No"
                  type="radio"
                  id={`custom-inline-radio-6`}
                />
              </div>
            </Form.Row>
            <Form.Group>
              <Form.File
                className="position-relative"
                required
                name="file"
                label="File"
                onChange={handleChange}
                isInvalid={!!errors.file}
                feedback={errors.file}
                id="validationFormik107"
                feedbackTooltip
              />
            </Form.Group>
            <Button type="submit">BroadCast</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RForm;
