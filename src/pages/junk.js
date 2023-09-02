<dialog id="my_modal_1" className="modal">
<form method="dialog" className="modal-box">
  <h3 className="font-bold text-lg">Change Password</h3>
  <div className="py-4">
    <label htmlFor="currentPassword" className="block font-medium">
      Current Password:
    </label>
    <input
      type="password"
      id="currentPassword"
      className="input input-bordered w-full"
      value={currentPassword}
      onChange={(e) => setCurrentPassword(e.target.value)}
    />
  </div>
  <div className="py-2">
    <label htmlFor="newPassword" className="block font-medium">
      New Password:
    </label>
    <input
      type="password"
      id="newPassword"
      className="input input-bordered w-full"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />
  </div>
  <div className="modal-action">
    <button className="btn" onClick={handleChangePassword}>
      Change Password
    </button>
    <button className="btn" onClick={() => window.my_modal_1.close()}>
      Close
    </button>
  </div>
</form>
</dialog>


//pagination code

// const [currentPage, setCurrentPage] = useState(1);
// const resultsPerPage = 15;
// const indexOfLastExercise = currentPage * resultsPerPage;
// const indexOfFirstExercise = indexOfLastExercise - resultsPerPage;
// const currentExercises = exercises.slice(
//   indexOfFirstExercise,
//   indexOfLastExercise
// );

// const shouldDisableButtons = exercises.length < 15;
// const goToPreviousPage = () => {
//   setCurrentPage(currentPage - 1);
//   window.scrollTo(0, 0); // scroll to the top of the window
// };
// const goToNextPage = () => {
//   setCurrentPage(currentPage + 1);
//   window.scrollTo(0, 0); // scroll to the top of the window
// };





{/* <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}


         {/* Render CoachDashboard for coaches */}
         {user?.userType === "coach" && <CoachDashboard coachId={user._id} />}
