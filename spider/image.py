import urllib2

def imageC(url,filename):
	try:
		res = urllib2.urlopen(url)
	except Exception as e:
		print('error',url)
		return
	with open(filename,'wb') as f:
		f.write(res.read())
		print(url)
		return
def fileRd(file):
	fs = open(file,'r+')
	for line in fs:
		imageC(line,line.split('/').pop().strip().replace('_','a').replace('=','b').replace('&','.'))
fileRd('image.txt')