export function Footer() {
  return (
    <footer className="bg-[#2d3e5f] text-white py-3 px-8 flex-shrink-0">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-xs text-gray-300">
          &copy; {new Date().getFullYear()} ARNN Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
