'use client';

import React, { useState } from 'react';
import './dashboard.css'; // Import your CSS here

const Dashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Dummy employee data
  const employees = [
    { id: 1, name: 'Brandon Jacob', position: 'Designer', age: 28, releaseDate: '2016-05-25' },
    { id: 2, name: 'Bridie Kessler', position: 'Developer', age: 35, releaseDate: '2014-12-05' },
    { id: 3, name: 'Ashleigh Langosh', position: 'Finance', age: 45, releaseDate: '2011-08-12' },
    { id: 4, name: 'Angus Grady', position: 'HR', age: 34, releaseDate: '2012-06-11' },
    { id: 5, name: 'Raheem Lehner', position: 'Dynamic Division Officer', age: 47, releaseDate: '2011-04-19' },
  ];

  return (
    <main id="main" className="main p-6">
      {/* Page Title */}
      <div className="pagetitle mb-4">
        <h1 className="page-title">Library Management System</h1>
        <nav>
          <ol className="breadcrumb flex gap-2">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">General</li>
          </ol>
        </nav>
      </div>

      {/* Section */}
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card p-4">
              <div className="dashboard-header">
                <h5 className="card-title">Available Books</h5>
                <button className="add" onClick={() => setShowAddModal(true)}>
                  Add Books
                </button>
              </div>

              {/* Table */}
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Availability</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp.id}>
                      <th scope="row">{emp.id}</th>
                      <td>{emp.name}</td>
                      <td>{emp.position}</td>
                      <td>{emp.age}</td>
                      <td>{emp.releaseDate}</td>
                      <td>
                        <div className="action-buttons justify-center">
                          <button className="edit" onClick={() => {}}>Edit</button>
                          <button className="view" onClick={() => setShowEditModal(true)}>View</button>
                          <button className="delete" onClick={() => {}}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="pagination mt-4">
                <button>Previous</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {showAddModal && (
        <AddEmployeeModal onClose={() => setShowAddModal(false)} />
      )}
      {showEditModal && (
        <EditInfoModal onClose={() => setShowEditModal(false)} />
      )}
    </main>
  );
};

export default Dashboard;

// AddEmployeeModal component
const AddEmployeeModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Add Books</h2>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Author:</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Genre:</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add Employee</button>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

// EditInfoModal component
const EditInfoModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Employee Information</h2>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>Employee details go here...</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
