function Rating() {
  return (
    <div className="flex items-end pt-2">
      <div className="ratings flex items-center">
        <p>*****</p>
        <p className="ml-3 text-reg">4.9</p>
      </div>
      <div>
        <p className="ml-4 text-reg">600 reviews</p>
      </div>
    </div>
  );
}

export default Rating;