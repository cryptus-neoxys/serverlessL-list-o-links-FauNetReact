import React from "react";

function LinkCard({ link, refreshLinks }) {
  const archiveLink = async () => {
    link.archived = !link.archived;
    try {
      await fetch("/api/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
    } catch (err) {
      console.error(err);
    } finally {
      refreshLinks();
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    try {
      await fetch("/api/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      refreshLinks();
    }
  };

  return (
    <div className="card">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button
          onClick={archiveLink}
          className={`px-5 mr-4 font-weight-medium btn ${
            !link.archived ? "btn-warning" : "btn-success"
          }`}>
          {!link.archived ? "Archive" : "Un-Archive"}
        </button>
        <button
          onClick={deleteLink}
          className="px-5 font-weight-medium btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default LinkCard;
