export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-3xl">Profile</h1>
      <p className="text-2xl">id: {params.id}</p>
      <hr />
    </div>
  );
}
