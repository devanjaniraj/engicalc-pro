FROM nginx:alpine

# Add metadata
LABEL maintainer="devanjaniraj@github.com"
LABEL description="EngiCalc Pro - Modern Engineering Calculator"
LABEL version="1.0.0"

# Copy the calculator files to nginx web root
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
