const errorHandler = () => {
    if(typeof(err) === 'string') {
        return res.status(400).json({ message:err });
    }

    if(err.name === 'unauthorizedError') {
        return res.status(401).json({ message: "Invalid Token" });
    }

}

return res.status(500).json({ message: err.message });

export default errorHandler;