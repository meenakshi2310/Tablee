import React from 'react'
import PropTypes from 'prop-types';
import './Table.css';
import Header from './Header';

export const Table = ({title='tableeee', header={id:'id', age:'age'}, data=[]}) => {
//export const Table = ({title, header=[{key:'id', value:'ID'},{key:'age',value:'Age'}], data}) => {
  return (
    <>
        <h1>{title}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>{header.id}</th>
                    <th>{header.age}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>32</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

Table.propTypes={
    title: PropTypes.string.isRequired,
    header: PropTypes.string,
    data: PropTypes.string,
};

Table.defaultProps={
    title: 'Table',
}