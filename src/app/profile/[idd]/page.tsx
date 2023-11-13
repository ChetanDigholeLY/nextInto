export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>profile page</p>
      <span className="bg-red-400 p-4 m-2">{params.idd}</span>
    </div>
  );
}
