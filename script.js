
// Tab switching functionality
document.getElementById('tab-grade6').addEventListener('click', function () {
    document.getElementById('content-grade6').classList.remove('hidden');
    document.getElementById('content-grade7').classList.add('hidden');
    document.getElementById('content-grade8').classList.add('hidden');
    document.getElementById('content-scores').classList.add('hidden');

    document.getElementById('tab-grade6').classList.add('tab-active');
    document.getElementById('tab-grade7').classList.remove('tab-active');
    document.getElementById('tab-grade8').classList.remove('tab-active');
    document.getElementById('tab-scores').classList.remove('tab-active');
});

document.getElementById('tab-grade7').addEventListener('click', function () {
    document.getElementById('content-grade6').classList.add('hidden');
    document.getElementById('content-grade7').classList.remove('hidden');
    document.getElementById('content-grade8').classList.add('hidden');
    document.getElementById('content-scores').classList.add('hidden');

    document.getElementById('tab-grade6').classList.remove('tab-active');
    document.getElementById('tab-grade7').classList.add('tab-active');
    document.getElementById('tab-grade8').classList.remove('tab-active');
    document.getElementById('tab-scores').classList.remove('tab-active');
});

document.getElementById('tab-grade8').addEventListener('click', function () {
    document.getElementById('content-grade6').classList.add('hidden');
    document.getElementById('content-grade7').classList.add('hidden');
    document.getElementById('content-grade8').classList.remove('hidden');
    document.getElementById('content-scores').classList.add('hidden');

    document.getElementById('tab-grade6').classList.remove('tab-active');
    document.getElementById('tab-grade7').classList.remove('tab-active');
    document.getElementById('tab-grade8').classList.add('tab-active');
    document.getElementById('tab-scores').classList.remove('tab-active');
});

document.getElementById('tab-scores').addEventListener('click', function () {
    document.getElementById('content-grade6').classList.add('hidden');
    document.getElementById('content-grade7').classList.add('hidden');
    document.getElementById('content-grade8').classList.add('hidden');
    document.getElementById('content-scores').classList.remove('hidden');

    document.getElementById('tab-grade6').classList.remove('tab-active');
    document.getElementById('tab-grade7').classList.remove('tab-active');
    document.getElementById('tab-grade8').classList.remove('tab-active');
    document.getElementById('tab-scores').classList.add('tab-active');
});

// Generate QR codes when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Grade 6 QR codes
    const grade6Links = [
        'https://forms.gle/1QKVK4EBVyhvxUhR8',
        'https://forms.gle/PrsDJoBUt8JKzZjg8',
        'https://forms.gle/SgeoncThsB5hiM8Q8'
    ];

    for (let i = 1; i <= grade6Links.length; i++) {
        QRCode.toCanvas(document.getElementById('qr-gs6lv1-' + i), grade6Links[i - 1], {
            width: 150,
            margin: 1,
            color: {
                dark: '#1e40af',  // Blue color for QR code
                light: '#FFFFFF'  // White background
            }
        }, function (error) {
            if (error) console.error(error);
        });
    }

    // Grade 7 QR codes
    const grade7Links = [
        'https://forms.gle/gs6lv2-1',
        'https://forms.gle/gs6lv2-2',
        'https://forms.gle/gs6lv2-3',
        'https://forms.gle/gs6lv2-4',
        'https://forms.gle/gs6lv2-5'
    ];

    for (let i = 1; i <= grade7Links.length; i++) {
        QRCode.toCanvas(document.getElementById('qr-gs6lv2-' + i), grade7Links[i - 1], {
            width: 150,
            margin: 1,
            color: {
                dark: '#166534',  // Green color for QR code
                light: '#FFFFFF'  // White background
            }
        }, function (error) {
            if (error) console.error(error);
        });
    }

    // Grade 8 QR codes
    const grade8Links = [
        'https://forms.gle/gs6lv3-1',
        'https://forms.gle/gs6lv3-2',
        'https://forms.gle/gs6lv3-3',
        'https://forms.gle/gs6lv3-4',
        'https://forms.gle/gs6lv3-5'
    ];

    for (let i = 1; i <= grade8Links.length; i++) {
        QRCode.toCanvas(document.getElementById('qr-gs6lv3-' + i), grade8Links[i - 1], {
            width: 150,
            margin: 1,
            color: {
                dark: '#92400e',  // Amber color for QR code
                light: '#FFFFFF'  // White background
            }
        }, function (error) {
            if (error) console.error(error);
        });
    }

    // Score sheet QR codes
    QRCode.toCanvas(document.getElementById('qr-scores-grade6'), 'https://sheets.google.com/scores-grade6', {
        width: 150,
        margin: 1,
        color: {
            dark: '#7e22ce',  // Purple color for QR code
            light: '#FFFFFF'  // White background
        }
    }, function (error) {
        if (error) console.error(error);
    });

    QRCode.toCanvas(document.getElementById('qr-scores-grade7'), 'https://sheets.google.com/scores-grade7', {
        width: 150,
        margin: 1,
        color: {
            dark: '#7e22ce',  // Purple color for QR code
            light: '#FFFFFF'  // White background
        }
    }, function (error) {
        if (error) console.error(error);
    });

    QRCode.toCanvas(document.getElementById('qr-scores-grade8'), 'https://sheets.google.com/scores-grade8', {
        width: 150,
        margin: 1,
        color: {
            dark: '#7e22ce',  // Purple color for QR code
            light: '#FFFFFF'  // White background
        }
    }, function (error) {
        if (error) console.error(error);
    });
});
(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'94183a93e233a054',t:'MTc0NzUzODUzMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();