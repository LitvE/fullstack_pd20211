import React from "react";
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {createProductAction} from '../../actions';
import styles from './ProductForm.module.css';

function ProductForm(props){
    const {createProduct} = props;
    const initialProductValues = {
        name: '',
        description: '',
        price: 0,
    };

    const submitHandler = (values, formikBag) => {
        createProduct(values);
        formikBag.resetForm();
    };

    return (
        <Formik initialValues={initialProductValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                    <Form className={styles.formStyle}>
                        <label>
                            Name:
                            <Field name="name"className={styles.fieldStyle}/>
                        </label>
                        <label>
                            Description:
                            <Field name="description" className={styles.fieldStyle}/>
                        </label>
                        <label>
                            Price:
                            <Field name="price" className={styles.fieldStyle}/>
                        </label>
                        <button>Add Product</button>
                    </Form>
                )
            }}
        </Formik>
    );

};

const mapStateToProps = (state) => state.product;

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: data => {
            dispatch(createProductAction(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);