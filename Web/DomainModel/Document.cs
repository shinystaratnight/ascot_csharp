using System;

namespace DomainModel
{
    /// <summary>
    /// Represents a Document uploaded for a job
    /// </summary>
    public class Document
    {
        public JobId JobId { get; set; }
        public string Path { get; set; }
        public string Name { get; set; }
        public byte[] Content { get; set; }
    }
}